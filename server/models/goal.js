import mongoose from "mongoose";

const goalSchema = new mongoose.Schema({
  goalId: {
    type: String,
    // required: true,
  },
  title: {
    type: String,
    // required: true,
  },
  posterId: {
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
});

const Goal = mongoose.model("Goal", goalSchema);

export default Goal;

// Events

// {
//   eventId: "mamamia",
//   title: "Mama Mia's Soup Kitchen",
//   posterId: "a1b2c3d4e5",
//   description: "Help Mama Mia make soup for the homeless!",
//   category: "Social Good",
//   committers: ["crikey", "a1b2c3d4e5"],
//   numCommitters: 2,
//   startDate: 1611978748,
//   endDate: 1612065148,
//   isCompletedEvent: false,
//   isTimedEvent: true,
// }

// {
//   eventId: "luigi",
//   title: "Work out to become strong like Luigi",
//   posterId: "a1b2c3d4e5",
//   description: "Luigi strong",
//   category: "Personal",
//   committers: ["a1b2c3d4e5"],
//   numCommitters: 2,
//   startDate: 1611978748,
//   endDate: 1612065148,
//   isCompletedEvent: false,
//   isTimedEvent: true,
// }

// {
//   eventId: "jeepers",
//   title: "Scooby-Doo",
//   posterId: "crikey",
//   description: "Solve that mystery!",
//   category: "Social Good",
//   committers: ["crikey", "a1b2c3d4e5"],
//   numCommitters: 2,
//   startDate: 1611978748,
//   endDate: 1612065148,
//   isCompletedEvent: false,
//   isTimedEvent: true,
// }

// Users

// {
//   firstName: "Joseph",
//   lastName: "Guacamole",
//   profilePicUrl: "",
//   email: "",
//   userId: "a1b2c3d4e5",
//   location: 12345,
//   eventCategory: "Social Good",
//   createdEvents: ["mamamia", "luigi"],
//   numCreatedEvents: 2,
//   committedEvents: ["mamamia", "luigi", "jeepers"],
//   numCommittedEvents: 2,
//   friends: [],
// }

// {
//   firstName: "Michael",
//   lastName: "Volumetric",
//   profilePicUrl: "",
//   email: "",
//   userId: "crikey",
//   location: 22222,
//   eventCategory: "Personal",
//   createdEvents: ["jeepers"],
//   numCreatedEvents: 1,
//   committedEvents: ["jeepers", "mamamia"],
//   numCommittedEvents: 2,
//   friends: [],
// }
