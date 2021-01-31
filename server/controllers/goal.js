import pkg from 'mongoose';
const { isValidObjectId } = pkg;
import Goal from "../models/goal.js";

export const createGoal = async (req, res) => {
  let {
    // goalId,
    title,
    // posterId,
    description,
    // category,
    // committers,
    // numCommitters,
    startDate,
    endDate,
    // isCompletedGoal,
    // isTimedGoal,
  } = req.body;

  if (!title) {
    return res.status(400).json({ message: "You did not enter a title" });
  }

  let newStartDate = parseInt(
    (new Date(startDate).getTime() / 1000).toFixed(0)
  );
  let newEndDate = parseInt((new Date(endDate).getTime() / 1000).toFixed(0));

  const newGoal = new Goal({
    // goalId,
    title,
    // posterId,
    description,
    // category,
    // committers,
    // numCommitters,
    startDat: newStartDate,
    endDate: newEndDate,
    // isCompletedGoal,
    // isTimedGoal,
    userId: req.user,
  });

  try {
    const savedGoal = await newGoal.save();
    res.status(201).json(savedGoal);
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
