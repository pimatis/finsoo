import { GoogleGenAI } from "@google/genai";
const ai = new GoogleGenAI({
  apiKey: import.meta.env.VITE_APP_KEY,
});

export default ai;
