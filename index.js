import express from "express";
import "dotenv/config.js";
import "./db/mongoose.js";
import tweetRouter from "./routes/tweetRouter";
import userRouter from "./routes/userRouter";

const app = express();
const port = process.env.PORT || 5000;

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*"); // * means Access from everywhere allowed
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});
app.use(express.json());
app.use("/users", usersRouter);
app.use("/tweets", tweetRouter);

app.listen(port, () => console.log(`Server running on port: ${port}`));
