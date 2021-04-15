import mongoose from "mongoose";
const { Schema, model } = mongoose;

const userSchema = Schema({
  name: String,
  email: String,
  password: String,
  bio: String,
});

export default model("User", userSchema);
