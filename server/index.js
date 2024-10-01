const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const Signupmodel = require('./models/sureshkrishnan'); // Correct import

const app = express();
app.use(express.json());
app.use(cors());

// Connect to MongoDB
mongoose.connect("mongodb://localhost:27017/sureshkrishnan", {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((error) => {
    console.error("Error connecting to MongoDB:", error);
  });

// Login route
app.post("/login", (req, res) => {
  const { email, password } = req.body;

  // Find user by email
  Signupmodel.findOne({ email: email })
    .then(user => {
      if (!user) {
        return res.json("No record existed");
      }

      // Check if the password is correct
      if (user.password === password) {
        res.json("Success");
      } else {
        res.json("The password is incorrect");
      }
    })
    .catch(err => {
      console.error("Error during login:", err);
      res.status(500).json("An error occurred during login");
    });
});

// Signup route
app.post('/signup', (req, res) => {
  const { name, email, password } = req.body;

  // Create a new user document using the Signupmodel
  Signupmodel.create({ name, email, password })
    .then(user => {
      console.log("User created:", user);
      res.status(201).json({ message: 'User created successfully!', user });
    })
    .catch(err => {
      console.error("Error creating user:", err);
      res.status(500).json({ error: 'Failed to create user' });
    });
});

// Start the server
app.listen(5000, () => {
  console.log("Server is running on port 5000");
});
