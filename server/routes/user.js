import express from "express";
import auth from "../middleware/auth.js";

import {
  registerUser,
  loginUser,
  tokenIsValid,
  getUser,
  deleteUser,
  getUserCommittedEvents,
  updateUser,
  commitGoal,
  uncommitGoal
} from "../controllers/user.js";

const router = express.Router();

router.post("/register", registerUser);

router.post("/login", loginUser);

router.delete("/delete", auth, deleteUser);

router.post("/tokenIsValid", tokenIsValid);

router.patch("/update", auth, updateUser);

router.get("/", auth, getUser);

router.get("/committedEvents", auth, getUserCommittedEvents);

router.get("/commitGoal/:id", auth, commitGoal);

router.get("/uncommitGoal/:id", auth, uncommitGoal);

export default router;
