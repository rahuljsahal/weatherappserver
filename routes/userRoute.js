const express = require("express");
const User = require("../schemas/userSchema");

const router = express.Router();

router.post("/login", async (req, res) => {
  try {
    const { userName, password } = req.body;
    const userExist = await User.findOne({ userName: userName });
    if (userExist) {
      if (userExist.userPassword === password) {
        res.send(userExist.userName);
      } else {
        res.send('Password Not Correct!')
      }
    }
  } catch (err) {
    res.send("Login Failed!");
  }
});

router.post('/register', async (req, res) => {
  try {
    const { username, password, retypePassword } = req.body;
    if (password === retypePassword) {
      const userExist = await User.findOne({ userName: username });
      if (userExist) {
        console.log(userExist)
        res.send("User Already Exists!");
      } else {
        const newUser = new User({
          userName: username,
          userPassword: password,
        });
        await newUser.save();
        res.send("Registration Successful");
      }
    } else {
      res.send("Password Mismatch!");
    }
  } catch (err) {
    res.send(err);
  }
});

module.exports = router
