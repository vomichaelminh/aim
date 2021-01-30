import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
    minlength: 5,
  },
  displayName: {
    type: String,
  },
  firstName: { type: String, required: false },
  lastName: { type: String, required: false },
  profilePicUrl: { type: String, required: false },
  location: { type: Number, required: false },
  eventCategory: { type: String, required: false },
  createdEvents: { type: [String], required: false },
  numCreatedEvents: { type: Number, required: false },
  committedEvents: { type: [String], required: false },
  numCommittedEvents: { type: Number, required: false },
  friends: { type: [String], required: true },
});

const User = mongoose.model("users", userSchema);

// export default User;
//   eventCategory: { type: String, required: true },
//   createdEvents: { type: [String], required: true },
//   numCreatedEvents: { type: Number, required: true },
//   committedEvents: { type: [String], required: true },
//   numCommittedEvents: { type: Number, required: true },
//   friends: { type: [String], required: true },
// });

// const User = mongoose.model("users", userSchema);

export default User;
