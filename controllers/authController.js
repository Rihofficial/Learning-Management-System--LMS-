const User = require("../models/User");
const bcrypt = require("bcryptjs");
const generateToken = require("../utils/token");

// @desc Register user
exports.register = async (req, res) => {
  try {
    const { fullName, email, password, role } = req.body;

    const existingUser = await User.findOne({ email });
    if (existingUser)
      return res.status(400).json({ message: "Email already exists" });

    const hashedPassword = await bcrypt.hash(password, 10);

    const user = await User.create({
      fullName,
      email,
      password: hashedPassword,
      role,
    });

    const token = generateToken(user);
    res
      .status(201)
      .json({ user: { id: user._id, fullName, email, role }, token });
  } catch (err) {
    res.status(500).json({ message: "Server Error" });
  }
};

// @desc Login user
exports.login = async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ email });
    if (!user) return res.status(400).json({ message: "Invalid credentials" });

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch)
      return res.status(400).json({ message: "Invalid credentials" });

    const token = generateToken(user);
    res
      .status(200)
      .json({
        user: { id: user._id, fullName: user.fullName, email, role: user.role },
        token,
      });
  } catch (err) {
    res.status(500).json({ message: "Server Error" });
  }
};
