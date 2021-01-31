import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import Goal from "../models/goal.js";
import User from "../models/user.js";

export const registerUser = async (req, res) => {
  try {
    // get information from body
    let { email, password, passwordCheck, displayName } = req.body;

    // validation of data

    // check if all fields entered
    if (!email || !password || !passwordCheck) {
      return res
        .status(400)
        .json({ message: "Not all fields have been entered." });
    }
    // check password length
    if (password.length < 5) {
      return res
        .status(400)
        .json({ message: "Password needs to be at least 5 characters long." });
    }
    // check if passwords are same
    if (password !== passwordCheck) {
      return res
        .status(400)
        .json({ message: "The passwords you have entered are not the same." });
    }

    // check if user with email already in database
    const existingUser = await User.findOne({ email: email });

    if (existingUser) {
      return res.status(400).json({
        message: "An account with that email has already been created.",
      });
    }

    // set username to email if no displayName given
    if (!displayName) {
      displayName = email;
    }

    // hash the password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    // create a new user
    const newUser = new User({
      email,
      password: hashedPassword,
      displayName,
    });
    const savedUser = await newUser.save();

    // send it to font end
    res.json(savedUser);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res
        .status(400)
        .json({ message: "Not all fields have been entered." });
    }

    const user = await User.findOne({ email: email });
    if (!user) {
      return res
        .status(400)
        .json({ message: "No account with this email has been registered." });
    }

    // compare password given with hashedPassword in database
    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) {
      return res.status(400).json({ message: "Invalid credentials." });
    }

    // Now logged in, so can now create jwt to use
    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET);

    // send to front end
    res.json({
      token,
      user: { id: user._id, displayName: user.displayName },
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const tokenIsValid = async (req, res) => {
  try {
    const token = req.header("x-auth-token");
    if (!token) return res.json(false);

    const verified = jwt.verify(token, process.env.JWT_SECRET);
    if (!verified) return res.json(false);

    const user = await User.findById(verified.id);
    if (!user) return res.json(false);

    return res.json(true);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const deleteUser = async (req, res) => {
  try {
    const deletedUser = await User.findByIdAndDelete(req.user);
    res.json(deletedUser);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const updateUser = async (req, res) => {
  try {
    const updatedUser = await User.findById(req.user);
    let status = await User.updateOne({ _id: updatedUser._id }, [
      { $set: req.body },
    ]);
    if (!status.ok) {
      res
        .status(403)
        .json({ message: "No User acknowledged or matched. No update." });
    } else {
      res.json({ message: "User updated successfully." });
    }
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const getUser = async (req, res) => {
  try {
    const user = await User.findById(req.user);
    res.json({
      displayName: user.displayName,
      id: user._id,
      location: user.location,
      firstName: user.firstName ? user.firstName : "",
      lastName: user.lastName ? user.lastName : "",
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const getUserCommittedEvents = async (req, res) => {
  try {
    const user = await User.findById({ _id: req.user });
    res.json({
      committedEvents: user.committedEvents,
      numCommittedEvents: user.numCommittedEvents,
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const commitGoal = async (req, res) => {
  try {
    const { id } = req.params;
    const userDoc = await User.findById(req.user);
    if (userDoc.committedEvents.find((event) => event == id)) {
      res.status(210).json({ message: "Already committed to goal." });
    } else {
      const user = await User.findByIdAndUpdate(req.user, {
        $push: { committedEvents: id },
        $inc: { numCommittedEvents: 1 },
      });
      const goal = await Goal.findByIdAndUpdate(id, {
        $push: { committers: user._id },
        $inc: { numCommitters: 1 },
      }); //look at later - id
      res.status(200).json({ message: "Goal successfully committed." });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const uncommitGoal = async (req, res) => {
  try {
    const { id } = req.params;
    const userDoc = await User.findById(req.user);
    if (!userDoc.committedEvents.find((event) => event == id)) {
      res.status(210).json({ message: "Already uncommitted to goal." });
    } else {
      const user = await User.findByIdAndUpdate(req.user, {
        $pull: { committedEvents: id },
        $dec: { numCommittedEvents: 1 },
      });
      const goal = await Goal.findByIdAndUpdate(id, {
        $pull: { committers: user._id },
        $dec: { numCommitters: 1 },
      });
      res.status(200).json({ message: "Goal successfully uncommitted." });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
