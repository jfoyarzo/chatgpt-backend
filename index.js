import { Configuration, OpenAIApi } from "openai";
import * as dotenv from 'dotenv'
import express from "express";
import bodyParser from "body-parser";
import cors from "cors";

dotenv.config()
const app = express();
const port = 8000;

app.use(bodyParser.json());
app.use(cors());
const configuration = new Configuration({
  organization: process.env.ORG,
  apiKey: process.env.KEY,
});
const openai = new OpenAIApi(configuration);

app.post("/", async (request, response) => {
    const { chats } = request.body;

    const result = await openai.createChatCompletion({
        model: "gpt-3.5-turbo",
        messages: [
            {
                role: "system",
                content: "You are an expert story-teller. You give accurate responses but always as the moral of fable"
            },
            ...chats,
        ],
    });

    response.json({
        output: result.data.choices[0].message,
    });
});

app.listen(port, () => {
  console.log(`listening on port ${port}`);
});
