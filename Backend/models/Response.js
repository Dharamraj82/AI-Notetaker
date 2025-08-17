import mongoose from "mongoose";

const responseSchema = new mongoose.Schema({
  prompt: { type: String, required: true },
  fileContent: { type: String },
  aiResponse: { type: String},
  createdAt: { type: Date, default: Date.now },
});

export default mongoose.model("Response", responseSchema);
