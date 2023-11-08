const express = require("express");
const { signin, login } = require("../controllers/auth");
const router = express.Router();

router.post("/register", signin);
router.post("/login", login);

module.exports = router;
