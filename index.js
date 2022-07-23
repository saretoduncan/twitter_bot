import { TwitterApi } from "twitter-api-v2";
import dotenv from "dotenv";
dotenv.config();

const client = new TwitterApi({
  appKey: process.env.API_KEY,
  appSecret: process.env.API_KEY_SECRET,
  accessToken: process.env.ACCESS_TOKEN,
  accessSecret: process.env.ACCESS_TOKEN_SECRET,
});
async function makeTweet() {
  const tweet = await client.v1.tweet(
    "Hello ,world! I'm twitting from my Node.js app! #buildwhatsnext"
  );
  console.log(tweet)
}
makeTweet();
