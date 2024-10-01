const mongoose = require('mongoose');

// Define the schema
const SignupSchema = new mongoose.Schema({
  name: String,
  email: String,
  password: String
});

// Create the model
const SignupModel = mongoose.model("Signup", SignupSchema);

// Export the model
module.exports = SignupModel;
