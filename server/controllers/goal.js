import Goal from "../models/goal.js";

export const createGoal = async (req, res) => {
  const {
    goalId,
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

  const newGoal = new Goal({
    goalId,
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
  });

  try {
    const savedGoal = await newGoal.save();
    res.status(201).json(savedGoal);
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};
