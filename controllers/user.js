import User from "../models/user.js";

export const getAllUsers = async (req, res) => {
  try {
    const users = await User.find();
    res.json(users);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const getSingleUser = async (req, res) => {
  try {
    const { id } = req.params;
    const user = await User.findById(id);
    if (!user)
      return res
        .status(404)
        .json({ message: `User with id of ${id} not found` });
    res.json(user);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
/*
export const getTweetsByUser = async (req, res) => {
  try {
    const { id } = req.params;
    const user = await User.findById(id);
    if (!user)
      return res
        .status(404)
        .json({ message: `User with id of ${id} not found` });
    res.json(user);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
*/
export const createNewUser = async (req, res) => {
  try {
    const { name, email, password, bio } = req.body;
    const newUser = await User.create({
      name,
      email,
      password,
      bio,
    });
    res.status(201).json(newUser);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
