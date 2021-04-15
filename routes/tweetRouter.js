import express from "express";
import {
  getAllTweet,
  getSingleTweet,
  createNewTweet,
} from "../controllers/tweet.js";

const tweets = express.Router();

posts.get("/", getAllTweet);
posts.get("/:id", getSingleTweet);
posts.post("/", createNewTweet);

export default tweets;
