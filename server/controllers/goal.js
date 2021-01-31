import pkg from 'mongoose';
const { isValidObjectId } = pkg;
import Goal from "../models/goal.js";
import User from "../models/user.js";

export const createGoal = async (req, res) => {
  const {
    title,
    posterId,
    description,
    category,
    committers,
    numCommitters,
    startDate,
    endDate,
    isCompletedGoal,
    isTimedGoal,
  } = req.body;

  if (!title) {
    return res.status(400).json({ message: "You did not enter a title" });
  }

  let postDate = Math.floor(Date.now() / 1000);

  if (!(committers.find(posterId))) {
    committers.push(posterId);
  }
  if (numCommitters == 0) {
    numCommitters = 1;
  }

  if (startDate || endDate) {
    isTimedGoal = true;
  } else {
    isTimedGoal = false;
  }

  const newGoal = new Goal({
    title,
    posterId,
    description,
    category,
    committers,
    numCommitters,
    startDate,
    endDate,
    isCompletedGoal,
    isTimedGoal,
    postDate,
  });

  try {
    const savedGoal = await newGoal.save(async function(err, doc) {
      if (err) {
        res.status(409).json({ message: err});
      } else {
        const status = await User.findByIdAndUpdate(posterId, { $push: {"committedEvents": doc._id, "createdEvents": doc._id}, $inc: {"numCommittedEvents": 1, "numCreatedEvents": 1}});
        res.status(200).json({ doc: savedGoal, message: "User schema updated successfully"});
      }
    });
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};

function sortByGoals(property){
  return function(a, b){
    if(a[property] < b[property])
         return 1;
    else if(a[property] > b[property])
        return -1;
    return 0; 
  }
}

export const getGoals = async (req, res) => {
  try {
    let goals = await Goal.find();  // array of json documents
    
    goals = goals.filter(goal => !(goal.isCompletedEvent));
    goals.sort(sortByGoals("postDate"));

    res.status(200).json(goals);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const getGoal = async (req, res) => {
  const { id } = req.params;
  try {
    const goal = await Goal.findById(id);
    res.status(200).json(goal);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const getRandomGoal = async (req, res) => {
  try {
    let goals = await Goal.find();
    
    goals = await goals.filter(goal => !(goal.isCompletedEvent));
    let random = Math.floor(Math.random() * goals.length);
    res.status(200).json(goals[random]);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
}

export const updateGoal = async (req, res) => {
  const { id } = req.params;
  try {
    let status = await Goal.updateOne({ _id: id }, [{ $set: req.body }])
    if (!status.ok) {
      res.status(403).json({ message: "No Goal acknowledged or matched. No update." });
    } else {
      res.json({message: "Goal updated successfully."});
    }
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const deleteGoal = async (req, res) => {
  const { id } = req.params;
  const goal = await Goal.findOne({ _id: id });

  if (!goal) {
    return res.status(400).json({
      message: "No goal found with this ID that belongs to the current user.",
    });
  }

  await Goal.findByIdAndDelete(id);
  res.json({ message: "Goal deleted successfully" });
};
