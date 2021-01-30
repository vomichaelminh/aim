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
    userId: req.user,
  });

  try {
    const savedGoal = await newGoal.save();
    res.status(201).json(savedGoal);
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};

function sortByGoals(property) {
  return function (a, b) {
    if (a[property] > b[property]) return 1;
    else if (a[property] < b[property]) return -1;
    return 0;
  };
}

export const getGoals = async (req, res) => {
  try {
    let goals = await Goal.find();
    goals = goals.filter((goal) => !goal.isCompletedGoal);
    goals.sort(sortByGoals("endDate"));
    console.log(goals);
    res.status(200).json(goals);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const getGoal = async (req, res) => {
  const { id } = req.params;
  try {
    const goal = await Goal.find({ _id: id });
    res.status(200).json(goal);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const updateGoal = async (req, res) => {
  const { id } = req.params;
  const { title, description, image, rating } = req.body;
  const goal = await Goal.findOne({ userId: req.user, _id: id });
  if (!goal) {
    return res.status(400).json({
      message: "No goal found with this ID that belongs to the current user.",
    });
  }
  const updatedGoal = { title, description, image, rating, _id: id };
  await Drama.findByIdAndUpdate(id, updatedGoal, { new: true });
  res.json(updatedGoal);
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
