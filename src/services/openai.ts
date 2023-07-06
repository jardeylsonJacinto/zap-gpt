import { Configuration, OpenAIApi } from "openai";
import dotenv from "dotenv";

dotenv.config();

const config = new Configuration({
  apiKey: process.env.OPENAIA_API_KEY
})