import express from "express";
import "dotenv/config.js";
import "./db/mongoose.js";
import tweetRouter from "./routes/tweetRouter.js";
import userRouter from "./routes/userRouter.js";

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
app.use("/users", userRouter);
app.use("/tweets", tweetRouter);

app.get("/", (req, res) => {
  res.send(
    "<h1>Hi Frontend Team!</h1><br><h2>These are your mini-twitter endpoints:<h2/><p>To retrieve all users: /users</p><p>To retrieve a single user: /users/:id</p><p>To retrieve all tweets: /tweets</p><p>To retrieve a single tweet: /tweets/:id</p><p>To retrieve all tweets by a specific user: /tweets/user/:id(authorID)</p>"
  );
});

app.listen(port, () => console.log(`Server running on port: ${port}`));
