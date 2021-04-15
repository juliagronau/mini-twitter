import user from "../models/user.js";

export const getAllUsers = async (req, res) => {
  try {
    const users = await user.find();
    res.json(users);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const getSingleUser = async (req, res) => {
  try {
    const { id } = req.params;
    const user = await tweet.findById(id);
    if (!user)
      return res
        .status(404)
        .json({ message: `User with id of ${id} not found` });
    res.json(user);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
