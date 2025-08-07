import formidable from "formidable";
import fs from "fs";

export const config = {
  api: { bodyParser: false }, // required for file upload
};

export default async function handler(req, res) {
  if (req.method !== "POST") return res.status(405).end();

  const form = formidable();
  form.parse(req, async (err, fields, files) => {
    if (err) return res.status(500).json({ error: "File parsing error" });

    const imageFile = Array.isArray(files.image) ? files.image[0] : files.image;
    const imagePath = imageFile.filepath;
    const base64Image = fs.readFileSync(imagePath, { encoding: "base64" });

    console.log("Parsed files:", files);

    try {
      const response = await fetch("https://api.perplexity.ai/chat/completions", {
        method: "POST",
        headers: {
        //   Authorization: `Bearer ${process.env.PERPLEXITY_API_KEY}`,
          Authorization: `Bearer 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`,
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          model: "sonar-pro",

          stream: false,
          messages: [
            {
              role: "user",
              content: [
                {
                  type: "text",
                  text: `Analyze this house image and:
1. Identify the main entrance gate location, which is typically near the lower portion of the image, slightly above the ground. It is usually placed between two boundary columns and just above the bottom beam (approximately 8 units above the ground). You must determine coordinates within this area to accurately fit the gate, adjusting the width and height as necessary.
2. Classify the gate design type suitable for the home as either 'straight' or 'arched'.
3. Return 4 rectangle corner coordinates between 0 to 100 (x,y) for where the main entrance gate should be placed.
5. The y coordinate of coordinates with id 3 and 4 must be smaller than or equal to 93.
6. Ensure the rectangle formed by the coordinates has a width-to-height ratio of 3:2.
Output only JSON:
{
  "type": "straight",
  "coordinates": [
    { "id": 1, "x": 30, "y": 70, "confidence": 0.95, "type": "top_left_corner" },
    { "id": 2, "x": 70, "y": 70, "confidence": 0.92, "type": "top_right_corner" },
    { "id": 3, "x": 70, "y": 93, "confidence": 0.89, "type": "bottom_right_corner" },
    { "id": 4, "x": 30, "y": 93, "confidence": 0.91, "type": "bottom_left_corner" }
  ]
}`,
                },
                {
                  type: "image_url",
                  image_url: { url: `data:image/jpeg;base64,${base64Image}` },
                },
              ],
            },
          ],
        }),
      });

      const data = await response.json();

      // Extract the JSON response
      let parsed = {};
      try {
        parsed = JSON.parse(data.choices[0].message.content);
      } catch {
        parsed = { raw: data.choices[0].message.content };
      }

      res.status(200).json(parsed);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  });
}
