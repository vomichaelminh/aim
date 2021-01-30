import express from "express";

import { createUser } from "../controllers/user.js";

const router = express.Router();

// create a User
router.post("/", createUser);

// // get all user's Events
// router.get("/", getEvents);

// // get a user's Event
// router.get("/:id", getEvent);

// // edit a Event
// router.patch("/:id", updateEvent);

// // delete a Event
// router.delete("/:id", deleteEvent);

export default router;
