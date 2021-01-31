import express from "express";

import {
  createGoal,
  getGoals,
  getGoal,
  updateGoal,
  deleteGoal,
  getRandomGoal
} from "../controllers/goal.js";

const router = express.Router();

// create a Goal
router.post("/", createGoal);

// get all user's Goals
router.get("/", getGoals);

router.get("/random", getRandomGoal);

// get a user's Goal
router.get("/:id", getGoal);

// edit a Goal
router.patch("/:id", updateGoal);

// delete a Goal
router.delete("/:id", deleteGoal);

export default router;
