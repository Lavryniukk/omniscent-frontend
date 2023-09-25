const next = require("next");
const express = require("express");
const port = parseInt(process.env.PORT, 10) || 3000;
require("dotenv").config();
const dev = process.env.NODE_ENV !== "production";
const { OpenAI } = require("langchain/llms/openai");
const { PromptTemplate } = require("langchain/prompts");
const app = next({ dev });
const handle = app.getRequestHandler();

app.prepare().then(() => {
  const server = express();
  server.use(express.json());
  server.use(express.urlencoded({ extended: true }));
  server.post("/chat", async (req, res) => {
    const llm = new OpenAI({
      openAIApiKey: process.env.OPENAI_API_KEY,
      temperature: 0,
      streaming: true,
    });
    const oneInputPrompt = new PromptTemplate({
      inputVariables: ["question"],
      template:
        "You are a roadmap list generator generator. You will be provided with text such as 'I want to learn blockchain/front-end/back-end' and you will have to make a list of tech which you have to know to become one. Each tech has to consist of 1-2 words. Each tech has to have sub-techs. Such as JS splits into basic syntax, dom manipulation and fetch api. Each sub-tech may have a sub-subtech if needed. Your answer must contain only a list of techs. Question: {question}",
    });
    const formattedOneInputPrompt = await oneInputPrompt.format({
      question: req.body.data,
    });
    let llmResponse = await llm.call(formattedOneInputPrompt);
    console.log(llmResponse);
    res.json({ data: req.body });
  });
  server.all("*", (req, res) => {
    return handle(req, res);
  });

  server.listen(port, (err) => {
    if (err) throw err;
    console.log(`> Ready on http://localhost:${port}`);
  });
});
