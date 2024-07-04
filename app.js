const express = require("express");
const bodyParser = require("body-parser");
const dotenv = require("dotenv");
const Groq = require("groq-sdk");

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;
const groq = new Groq({ apiKey: process.env.GROQ_API_KEY });

// Middleware
app.use(bodyParser.json());
app.use(express.static("public"));

// Routes
app.get("/", (req, res) => {
  res.sendFile(__dirname + "/public/views/index.html");
});

app.post("/generate_text", async (req, res) => {
  const { sender, recipient, subject, message } = req.body;

  try {
    const chatCompletion = await getGroqChatCompletion(
      sender,
      recipient,
      subject,
      message
    );
    const generatedContent =
      chatCompletion.choices[0]?.message?.content || "No response from AI.";
    res.json({ text: generatedContent });
  } catch (error) {
    console.error("Error generating text:", error);
    res.status(500).json({ text: "An error occurred. Please try again." });
  }
});

async function getGroqChatCompletion(sender, recipient, subject, message) {
  const prompt = `Generate a professional correspondence with the following details:
Sender: ${sender}
Recipient: ${recipient}
Subject: ${subject}
Message: ${message}`;

  return groq.chat.completions.create({
    messages: [{ role: "user", content: prompt }],
    model: "llama3-8b-8192",
  });
}

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
