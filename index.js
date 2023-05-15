import { Configuration, OpenAIApi } from "openai";
import express from "express";
import bodyParser from "body-parser";
import cors from "cors";

const app = express();
const port = 8000;

app.use(bodyParser.json());
app.use(cors());
const configuration = new Configuration({
  organization: "org-UiXsHsD6WsmWZggF4OAY8ORh",
  apiKey: "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",
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
