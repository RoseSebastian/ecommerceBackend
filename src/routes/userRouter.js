const express = require("express")
const {registerController, loginUser} = require("../controllers/userController")

const router = express.Router();

router.post("/register", registerController)
router.post("/login", loginUser)

module.exports = router