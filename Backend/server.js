import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import connectDB from "./db.js";
import aiRoutes from "./routes/aiRoutes.js";

dotenv.config();
connectDB();

const app = express();
app.use(cors());
app.use(express.json());

// Routes
app.get("/", (req, res) => {
  res.send("Hello Developer, Server is working");
});

app.use("/api/ai", aiRoutes);


const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
