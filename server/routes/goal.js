import express from "express";
import auth from "../middleware/auth.js";

import {
  createGoal,
  getGoals,
  getGoal,
  updateGoal,
  deleteGoal,
} from "../controllers/goal.js";

const router = express.Router();

// create a Goal
router.post("/", auth, createGoal);

// get all user's Goals
router.get("/", auth, getGoals);

// get a user's Goal
router.get("/:id", auth, getGoal);

// edit a Goal
router.patch("/:id", auth, updateGoal);

// delete a Goal
router.delete("/:id", auth, deleteGoal);

export default router;
