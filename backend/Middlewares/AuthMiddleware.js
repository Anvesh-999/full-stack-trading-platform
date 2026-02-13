const jwt = require("jsonwebtoken");
const User = require("../model/UserModel");
require('dotenv').config();

module.exports.userVerification = async (req, res, next) => {
  try {
    // console.log("COOKIES:", req.cookies);

    const token = req.cookies.token;
    if (!token) {
      console.log("❌ No token");
      return res.status(401).json({ status: false });
    }

    // console.log("TOKEN:", token);
    // console.log("SECRET:", process.env.TOKEN_KEY);

    const decoded = jwt.verify(token, process.env.TOKEN_KEY);
    // console.log("DECODED:", decoded);

    const user = await User.findById(decoded.id);

    if (!user) return res.status(401).json({ status: false });

    req.user = user;
    next();
  } catch (err) {
    console.error("JWT ERROR:", err.message);
    return res.status(401).json({ status: false });
  }
};
