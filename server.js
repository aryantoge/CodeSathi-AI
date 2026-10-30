
const express = require("express");
const path = require("path");
const { spawn } = require("child_process");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json({ limit: "10kb" }));
app.use(express.static(path.join(__dirname, "..")));

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "..", "index.html"));
});

app.post("/api/chat", (req, res) => {
  const question = req.body.question;

  if (typeof question !== "string" || !question.trim()) {
    return res.status(400).json({
      answer: "Please enter a question."
    });
  }

  if (question.length > 1000) {
    return res.status(400).json({
      answer: "Please keep your question under 1000 characters."
    });
  }

  const isWindows = process.platform === "win32";
  const executable = path.join(
    __dirname,
    "backend",
    isWindows ? "codesathi.exe" : "codesathi"
  );

  const bot = spawn(executable);
  let output = "";
  let finished = false;

  const timeout = setTimeout(() => {
    if (!finished) {
      finished = true;
      bot.kill();
      res.status(504).json({
        answer: "The chatbot took too long. Please try again."
      });
    }
  }, 5000);

  bot.stdout.setEncoding("utf8");
  bot.stdout.on("data", data => output += data);

  bot.on("error", () => {
    if (finished) return;
    finished = true;
    clearTimeout(timeout);
    res.status(500).json({
      answer: "C++ backend unavailable. Please compile main.cpp first."
    });
  });

  bot.on("close", () => {
    if (finished) return;
    finished = true;
    clearTimeout(timeout);

    res.json({
      answer: output.trim() || "Sorry, no answer was returned."
    });
  });

  bot.stdin.on("error", () => {});
  bot.stdin.end(question.trim() + "\n");
});

app.listen(PORT, "0.0.0.0", () => {
  console.log(`CodeSathi AI running on port ${PORT}`);
});

