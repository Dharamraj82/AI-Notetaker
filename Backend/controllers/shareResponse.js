import nodemailer from "nodemailer";
import Response from "../models/Response.js";

export const shareResponse = async (req, res) => {
  try {
    const { id } = req.params;
    const { email } = req.body;

    if (!email) {
      return res.status(400).json({ error: "Email is required" });
    }

    // Find the response by ID
    const response = await Response.findById(id);
    if (!response) {
      return res.status(404).json({ error: "Response not found" });
    }

    // Create transporter
    const transporter = nodemailer.createTransport({
      service: "gmail", // or any email service
      auth: {
        user: process.env.EMAIL_USER, // your email
        pass: process.env.EMAIL_PASS, // your email password or app password
      },
    });

    // Mail options
    const summaryLink = `http://localhost:5173/summary/${id}`;

    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: email,
      subject: "Shared Summary from AI Notetaker",
      html: `
    <h3>Your AI Summary:</h3>
    <div>${response.aiResponse}</div>
    <p>View full summary online: <a href="${summaryLink}" target="_blank">${summaryLink}</a></p>
  `,
    };

    // Send email
    await transporter.sendMail(mailOptions);

    res.json({
      success: true,
      message: "Summary shared successfully!",
      aiResponse: response.aiResponse,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Server error" });
  }
};
