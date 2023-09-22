const next = require("next");
const express = require("express");
const OpenAI = require("langchain/llms/openai");
const port = parseInt(process.env.PORT, 10) || 3000;
const dev = process.env.NODE_ENV !== "production";
const app = next({ dev });
const handle = app.getRequestHandler();
app.prepare().then(() => {
  const server = express();
  server.use(express.json());
  server.use(express.urlencoded({ extended: true }));
  server.post("/chat", (req, res) => {
    console.log(req.body.data);
    try {
      res.json({ data: req.body });
    } catch (error) {
      console.error("JSON parsing error:", error);
      res.status(400).json({ error: "Invalid JSON data" });
    }
  });
  server.all("*", (req, res) => {
    return handle(req, res);
  });

  server.listen(port, (err) => {
    if (err) throw err;
    console.log(`> Ready on http://localhost:${port}`);
  });
});
