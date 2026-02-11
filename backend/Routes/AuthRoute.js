const router = require("express").Router();
const { Signup, Login } = require("../Controllers/AuthController");
const { userVerification } = require("../Middlewares/AuthMiddleware");

router.post("/signup", Signup);
router.post("/login", Login);
router.get("/verify", userVerification, (req, res) => {
  res.json({ status: true, user: req.user.username });
});


module.exports = router;
