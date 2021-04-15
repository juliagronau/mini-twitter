import express from "express";
import {
  getAllUsers,
  getSingleUser,
  createNewUser,
} from "../controllers/users.js";

const users = express.Router();

posts.get("/", getAllUsers);
posts.get("/:id", getSingleUser);
posts.post("/", createNewUser);

export default users;
