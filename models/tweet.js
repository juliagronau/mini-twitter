import mongoose from "mongoose";
const { Schema, model } = mongoose;

const tweetSchema = Schema({
  author: { type: Schema.Types.ObjectId, ref: "user" },
  tweet: String,
  date: Date,
  default: Date.now,
});

export default model("tweet", tweetSchema);
