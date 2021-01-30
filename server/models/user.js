import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  profilePicUrl: { type: String, required: false },
  email: { type: String, required: false },
  location: { type: Number, required: false },
  eventCategory: { type: String, required: true },
  createdEvents: { type: [String], required: true },
  numCreatedEvents: { type: Number, required: true },
  committedEvents: { type: [String], required: true },
  numCommittedEvents: { type: Number, required: true },
  friends: { type: [String], required: true },
});

const User = mongoose.model("users", userSchema);

export default User;
