import express from "express";
import multer from "multer";
import { processFileAndPrompt, getLatestResponse, updateResponse,  } from "../controllers/aiController.js";
import {shareResponse} from"../controllers/shareResponse.js"
const router = express.Router();
const upload = multer({ dest: "uploads/" });

router.post("/upload", upload.single("file"), processFileAndPrompt);
router.get("/latest/:id", getLatestResponse);
router.put("/update/:id", updateResponse);
router.post("/share/:id", shareResponse);


export default router;
