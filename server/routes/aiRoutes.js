import express from "express";
import OpenAI from "openai";

const router = express.Router();

const client = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

router.post("/generate", async (req, res) => {
  try {
    const { prompt } = req.body;

    const result = await client.chat.completions.create({
      model: "gpt-4o-mini",
      messages: [
        {
          role: "system",
          content:
            "You are a travel AI. Generate structured day-wise itineraries."
        },
        { role: "user", content: prompt }
      ]
    });

    res.json({ reply: result.choices[0].message.content });
  } catch (err) {
    res.status(500).json({ reply: "AI error" });
  }
});

export default router;