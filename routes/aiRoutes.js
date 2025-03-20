import express from 'express';
import { generateAIResponse } from '../controllers/aiController.js';

const router = express.Router();

// Route to handle AI text generation
router.post('/generate', generateAIResponse);

export default router;