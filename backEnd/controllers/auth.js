const User = require("../models/userModel");
const bcrypt = require("bcrypt");

exports.signin = async (req, res) => {
  try {
    const { email, password } = req.body;
    // Check if the email is already registered
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: "Email is already in use" });
    }

    const hashPassword = await bcrypt.hash(password, 10); // hash the password
    const user = await User.create({ email, password: hashPassword }); // Create a new user with the hashed password
    res.status(201).json(user);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.login = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email });
    if (user && (await bcrypt.compare(password, user.password))) {
      // Passwords match, authentication successful
      res.json({ message: "Login Successfull" });
    } else {
      // Invalid email or password
      res.status(401).json({ message: "Invalid credentials" });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
