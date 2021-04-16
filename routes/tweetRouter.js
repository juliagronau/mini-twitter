import express from "express";
import {
  getAllTweets,
  getSingleTweet,
  createNewTweet,
  getAllTweetsByUser,
} from "../controllers/tweet.js";

const tweets = express.Router();

tweets.get("/", getAllTweets);
tweets.get("/:id", getSingleTweet);
tweets.post("/", createNewTweet);
tweets.get("/user/:author", getAllTweetsByUser);

export default tweets;
