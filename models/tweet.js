import mongoose from "mongoose";
const { Schema, model } = mongoose;

const tweetSchema = Schema({
  author: { type: Schema.Types.ObjectId, ref: "User" },
  tweet: { type: String, required: true },
  date: { type: Date, default: Date.now },
});

export default model("Tweet", tweetSchema);
