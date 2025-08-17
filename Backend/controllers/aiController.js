import fs from "fs";
import Groq from "groq-sdk";
import Response from "../models/Response.js";
import dotenv from "dotenv";
dotenv.config();

const groq = new Groq({ apiKey: process.env.GROQ_API_KEY });

// Upload + Process + Save to DB
export const processFileAndPrompt = async (req, res) => {
  try {
    const { prompt } = req.body;
    const file = req.file;

    if (!file) return res.status(400).json({ error: "No file uploaded" });

    // Read .txt file
    const fileContent = fs.readFileSync(file.path, "utf-8");

    // Send to Groq AI
    const completion = await groq.chat.completions.create({
      messages: [
        {
          role: "user",
          content: `
- <ul> and <li> for bullet points (if say then use)
- <strong> for bold text
- <em> or <mark> for highlights

Make it easy to read and visually clear. Here is the content:

Prompt: ${prompt}

File Content:
${fileContent}
      `,
        },
      ],
      model: "openai/gpt-oss-20b",
    });

    const aiText = completion.choices[0]?.message?.content || "";

    // Save in DB
    const newResponse = await Response.create({
      prompt,
      fileContent,
      aiResponse: aiText,
    });

    res.json({ success: true, response: newResponse });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Server error" });
  }
};

// Get latest AI response for user
export const getLatestResponse = async (req, res) => {
  try {
    const latest = await Response.findOne().sort({ createdAt: -1 });

    if (!latest) {
      return res.json({ message: "No response found" });
    }

    // Format response
    const formatted = {
      id: latest._id.toString(),
      prompt: latest.prompt,
      fileContent: latest.fileContent,
      aiResponse: latest.aiResponse,
      createdAt: latest.createdAt,
    };

    res.json(formatted);
  } catch (error) {
    res.status(500).json({ error: "Server error" });
  }
};

export const updateResponse = async (req, res) => {
  try {
    const { id } = req.params; // Get the response ID from route params
    const { aiResponse } = req.body; // Updated AI summary/content

    if (!aiResponse) {
      return res.status(400).json({ error: "aiResponse is required for update" });
    }

    // Find by ID and update
    const updatedResponse = await Response.findByIdAndUpdate(
      id,
      { aiResponse }, // fields to update
      { new: true }   // return the updated document
    );

    if (!updatedResponse) {
      return res.status(404).json({ error: "Response not found" });
    }

    res.json({ success: true, response: updatedResponse });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Server error" });
  }
};

