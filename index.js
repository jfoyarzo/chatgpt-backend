import { Configuration, OpenAIApi } from "openai";
import express from "express";
import bodyParser from "body-parser";
import cors from "cors";

const app = express();
const port = 8000;

app.use(bodyParser.json());
app.use(cors());

app.listen(port, () => {
    console.log(`listening on port ${port}`);
  });