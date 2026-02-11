const User = require("../model/UserModel");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const createToken = (id) => {
  return jwt.sign({ id }, process.env.TOKEN_KEY, { expiresIn: "3d" });
};

// ================= SIGNUP =================
module.exports.Signup = async (req, res) => {
  try {
    const { email, username, password } = req.body;

    if (!email || !username || !password) {
      return res.status(400).json({
        success: false,
        message: "All fields are required",
      });
    }

    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({
        success: false,
        message: "User already exists",
      });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const user = await User.create({
      email,
      username,
      password: hashedPassword,
    });

    const token = createToken(user._id);

    res.cookie("token", token, {
  httpOnly: true,
  sameSite: "none", // allow cross-site cookie
  secure: false,    // true if using https
  maxAge: 24 * 60 * 60 * 1000, // 1 day
});


    res.status(201).json({
      success: true,
      message: "Signup successful",
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({
      success: false,
      message: "Signup failed",
    });
  }
};

// ================= LOGIN =================
module.exports.Login = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({
        success: false,
        message: "All fields are required",
      });
    }

    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({
        success: false,
        message: "Invalid email or password",
      });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({
        success: false,
        message: "Invalid email or password",
      });
    }

    const token = createToken(user._id);

    res.cookie("token", token, {
  httpOnly: true,
  sameSite: "none", // allow cross-site cookie
  secure: false,    // true if using https
  maxAge: 24 * 60 * 60 * 1000, // 1 day
});


    res.status(200).json({
      success: true,
      message: "Login successful",
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({
      success: false,
      message: "Login failed",
    });
  }
};
