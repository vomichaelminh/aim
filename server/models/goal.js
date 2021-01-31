import mongoose from "mongoose";

const goalSchema = new mongoose.Schema({
  title: {
    type: String,
    // required: true,
  },
  userId: {
    type: String,
    // required: true,
  },
  description: {
    type: String,
    // required: true,
  },
  category: {
    type: String,
    // required: true,
  },
  committers: {
    type: [String],
    // required: true,
  },
  numCommitters: {
    type: Number,
    // required: true,
  },
  completers: {
    type: [String],
    // required: false,
  },
  numCompleters: {
    type: Number,
    // required: false,
  },
  startDate: {
    type: Number,
    // required: true,
  },
  endDate: {
    type: Number,
    // required: true,
  },
  isCompletedEvent: {
    type: Boolean,
    // required: true,
  },
  isTimedEvent: {
    type: Boolean,
    // required: true,
  },
  userId: {
    type: String,
    required: true,
  },
  postDate: {
    type: Number,
    // required: true,
  }
});

const Goal = mongoose.model("Goal", goalSchema);

export default Goal;

