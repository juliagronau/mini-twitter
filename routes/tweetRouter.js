import express from "express";
import {
  getAllTweets,
  getSingleTweet,
  createNewTweet,
} from "../controllers/tweet.js";

const tweets = express.Router();

tweets.get("/", getAllTweets);
tweets.get("/:id", getSingleTweet);
tweets.post("/", createNewTweet);

export default tweets;
