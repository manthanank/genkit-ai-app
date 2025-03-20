import { gemini20Flash, googleAI } from '@genkit-ai/googleai';
import { genkit } from 'genkit';
import dotenv from 'dotenv';

dotenv.config(); // Load environment variables

// Configure Genkit instance
const ai = genkit({
  plugins: [googleAI()],
  model: gemini20Flash,
});

// Function to generate AI response
export async function generateResponse(prompt) {
  try {
    const { text } = await ai.generate(prompt);
    return text;
  } catch (error) {
    console.error('AI Generation Error:', error);
    throw new Error('Failed to generate AI response');
  }
}
