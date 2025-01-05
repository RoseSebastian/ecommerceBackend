require("dotenv").config();
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const UserModel = require("../models/userModel");

const salt_round = Number(process.env.SALT_ROUNDS);
const secretKey = process.env.JWT_SECRET_KEY;

const registerController = (req, res) => {
  userData = req.body;
  bcrypt.hash(userData.password, salt_round, async function (err, hash) {
    if (hash) {
      userData.password = hash;
      const newUser = await UserModel.create(userData);
      res.json(newUser);
    } else {
      res.status(400).json({ message: "Please provide valid data" });
    }
  });
};

const loginUser = async (req, res) => {
  const data = req.body;
  try {
    const user = await UserModel.findOne({ email: data.email });
    bcrypt.compare(data.password, user.password, function (err, result) {
      if (result) {
        var token = jwt.sign({ email: data.email }, secretKey);
        res.json(token);
      }else{
        res.status(401).json({ message: "Incorrect password" });
      }
    });
  } catch (err) {
    res.status(401).json({ message: "Invalid EmailID" });
  }
};

module.exports = { registerController, loginUser };
