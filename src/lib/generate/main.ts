import ai from "$lib/ai/main";
import * as themes from "$lib/themes/main";

export type Theme =
  | "cartoon"
  | "anime"
  | "pixelArt"
  | "watercolor"
  | "minimalist"
  | "retro"
  | "popArt"
  | "neon";

export default async function generate(prompt: string, selectedTheme: Theme = "cartoon") {
  let systemPrompt: string;

  switch (selectedTheme) {
    case "cartoon":
      systemPrompt = themes.cartoonTheme().systemPrompt;
      break;
    case "anime":
      systemPrompt = themes.animeTheme().systemPrompt;
      break;
    case "pixelArt":
      systemPrompt = themes.pixelArtTheme().systemPrompt;
      break;
    case "watercolor":
      systemPrompt = themes.watercolorTheme().systemPrompt;
      break;
    case "minimalist":
      systemPrompt = themes.minimalistTheme().systemPrompt;
      break;
    case "retro":
      systemPrompt = themes.retroTheme().systemPrompt;
      break;
    case "popArt":
      systemPrompt = themes.popArtTheme().systemPrompt;
      break;
    case "neon":
      systemPrompt = themes.neonTheme().systemPrompt;
      break;
    default:
      systemPrompt = themes.cartoonTheme().systemPrompt;
  }

  try {
    const enhancedPrompt = `${prompt}\n\nInstructions for the design:\n${systemPrompt}`;

    const contents = [
      {
        role: "user",
        parts: [{ text: enhancedPrompt }]
      }
    ];

    const response = await ai.models.generateContent({
      model: "gemini-2.0-flash-exp-image-generation",
      contents: contents,
      config: {
        responseModalities: ["Text", "Image"]
      },
    });

    let result = { text: "", imageData: "" };

    if (response.candidates && response.candidates[0]?.content?.parts) {
      for (const part of response.candidates[0].content.parts) {
        if (part.inlineData && part.inlineData.data) {
          result.imageData = part.inlineData.data;
        }
      }
    }

    return result;
  } catch (error) {
    console.error("Error generating content:", error);
    throw error;
  }
}
