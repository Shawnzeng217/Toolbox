import { GoogleGenAI } from "@google/genai";

export const editImageWithGemini = async (base64Image: string, prompt: string): Promise<string> => {
  try {
    // Initialize the client inside the function to ensure process.env.API_KEY is available
    // and to avoid top-level initialization errors in the browser.
    const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

    // Clean base64 string if it contains metadata
    const cleanBase64 = base64Image.replace(/^data:image\/(png|jpeg|jpg|webp);base64,/, '');
    
    // Determine mimeType (default to png if not found)
    const match = base64Image.match(/^data:image\/(.*?);base64,/);
    const mimeType = match ? `image/${match[1]}` : 'image/png';

    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash-image',
      contents: {
        parts: [
          {
            inlineData: {
              data: cleanBase64,
              mimeType: mimeType,
            },
          },
          {
            text: prompt,
          },
        ],
      },
      // Config to ensure we get an image back if possible
    });

    // Check for inline data (image) in response
    const candidates = response.candidates;
    if (candidates && candidates.length > 0) {
        const parts = candidates[0].content.parts;
        for (const part of parts) {
            if (part.inlineData && part.inlineData.data) {
                return `data:${part.inlineData.mimeType || 'image/png'};base64,${part.inlineData.data}`;
            }
        }
    }
    
    throw new Error("No image generated.");
  } catch (error) {
    console.error("Gemini API Error:", error);
    throw error;
  }
};