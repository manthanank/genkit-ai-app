import { generateResponse } from '../services/aiService.js';

// Controller to handle AI text generation
export const generateAIResponse = async (req, res) => {
  try {
    const { prompt } = req.body;
    if (!prompt) {
      return res.status(400).json({ error: 'Prompt is required' });
    }

    const response = await generateResponse(prompt);
    res.json({ response });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};