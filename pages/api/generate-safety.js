import { Configuration, OpenAIApi } from "openai";

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);

export default async function (req, res) {
  // Destruct the request
  const { state, subject } = req.body;
  const prompt = generatePrompt(state, subject);

  const completion = await openai.createCompletion({
    model: "text-davinci-003",
    prompt: prompt,
    temperature: 0.6,
    max_tokens: 2048,
  });

  res.status(200).json({ result: completion.data.choices[0].text });
}

function generatePrompt(state, subject) {
  return `Can you provide a list of key points from both the Department of Buildings of ${state} and the Occupational Safety and Health Administration (OSHA) related to ${subject} at hand? Please provide the information in a list format`;
}
