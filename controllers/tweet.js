import Tweet from "../models/tweet.js";

export const getAllTweets = async (req, res) => {
  try {
    const tweets = await Tweet.find();
    res.json(tweets);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const getAllTweetsByUser = async (req, res) => {
  try {
    const { author } = req.params;
    const usertweets = await Tweet.find({ author }).populate(
      "author",
      "name -_id"
    );
    res.json(usertweets);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const getSingleTweet = async (req, res) => {
  try {
    const { id } = req.params;
    const found = await Tweet.findById(id);
    if (!found)
      return res
        .status(404)
        .json({ message: `Tweet with id of ${id} not found` });
    res.json(found);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const createNewTweet = async (req, res) => {
  try {
    const { author, tweet, date } = req.body;
    const newTweet = await Tweet.create({
      author,
      tweet,
      date,
    });
    res.status(201).json(newTweet);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
