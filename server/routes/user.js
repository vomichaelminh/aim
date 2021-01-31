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
} from "../controllers/user.js";

const router = express.Router();

router.post("/register", registerUser);

router.post("/login", loginUser);

router.delete("/delete", auth, deleteUser);

router.post("/tokenIsValid", tokenIsValid);

router.patch("/update", auth, updateUser);

router.get("/", auth, getUser);

router.get("/committedevents", auth, getUserCommittedEvents);

export default router;
