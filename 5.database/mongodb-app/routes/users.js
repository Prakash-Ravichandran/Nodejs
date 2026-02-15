import express from "express";
import User from "../models/user.js";
const router = express.Router();

// "/" matches "/api/users"
router.post("/", async (req, res) => {
  const data = req.body;
  console.log(data);

  const user = new User(data);
  const saved = await user.save();
  res.status(201).json(saved);
});

// get all users
router.get("/", async (req, res) => {
  const allUsers = await User.find();
  res.json(allUsers);
});

//get single user
router.get("/:userid", async (req, res) => {
  console.log(req.params.userid);
  const user = await User.findById(req.params.userid);
  res.json(user);
});

// update single user
router.put("/:userid", async (req, res) => {
  const user = await User.findByIdAndUpdate(req.params.userid, req.body, {
    new: true,
  });
  res.status(201).json(user);
});

// delete single user
router.delete("/:userid", async (req, res) => {
  await User.findByIdAndDelete(req.params.userid);
  res.status(204).send();
});

export default router;
