import User from "../models/user.js";

export const createUser = async (req, res) => {
  const body = req.body;

  if (!body) {
    return res.status(400).json({ message: "No user specified." });
  }

  const newUser = new User(body);

  try {
    const savedUser = await newUser.save();
    res.json(savedUser);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
