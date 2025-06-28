// server/routes/auth.js
const express = require("express");
const router = express.Router();
const User = require("../models/User");

// POST /api/auth/register
router.post("/register", async (req, res) => {
  const { role, email, password } = req.body;
  try {
    const user = new User({ role, email, password });
    await user.save();
    res.status(201).json({ message: "User registered successfully" });
  } catch (err) {
    res.status(500).json({ error: "Registration failed" });
  }
});

// POST /api/auth/login
router.post("/login", async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.findOne({ email, password });
    if (!user) return res.status(400).json({ error: "Invalid credentials" });

    res.json({ message: "Login successful", role: user.role });
  } catch (err) {
    res.status(500).json({ error: "Login failed" });
  }
});

module.exports = router;
