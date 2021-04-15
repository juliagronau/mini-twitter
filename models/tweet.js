import mongoose from "mongoose";
const { Schema, model } = mongoose;

const tweetSchema = Schema({
  author: { type: Schema.Types.ObjectId, ref: "user" },
  tweet: { type: String },
  date: { type: Date, default: Date.now },
});
1;
export default model("Tweet", tweetSchema);
