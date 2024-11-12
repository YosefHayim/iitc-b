const OpenAI = require("openai");

const chatGPTconversation = async (req, res) => {
  const userInput = req.body.text;
  const openAIClient = new OpenAI({
    apiKey: process.env.OPEN_AI_API_KEY,
  });

  try {
    const chatCompletion = await openAIClient.chat.completions.create({
      message: [{ role: "user", content: userInput }],
      model: "gpt-3.5-turbo-0125",
    });

    res.status(200).json({
      message: "success",
      response: chatCompletion.choices[0].message.content,
    });
  } catch (error) {
    res.status(500).json({ error: "An error occurred with the AI request" });
  }
};

module.exports = chatGPTconversation;
