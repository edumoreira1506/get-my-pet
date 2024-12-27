const Groq = require("groq-sdk");

const groq = new Groq({
  apiKey: "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",
  dangerouslyAllowBrowser: true,
});

export async function getMyPetGenerator(petRequirements: string) {
  try {
    const chatCompletion = await groq.chat.completions.create({
      messages: [
        {
          role: "user",
          content:
            "Estou fazendo um app onde o usuario entrará com uma mensagem contendo informações sobre como ele deseja que seja seu animal de estimação e quero responder uma única sugestão com base no que ele digitou, quero que a repsosta não ofenda niguem e seja criativa. A resposta deve incluir apenas animais que é permitido ser de estimação no Brasil.",
        },
        {
          role: "assistant",
          content:
            "Legal! Eu vou sugerir alguns animais/raças de acordo com o que você me mandar!",
        },
        {
          role: "user",
          content: petRequirements,
        },
      ],
      model: "llama-3.1-70b-versatile",
      temperature: 1,
      max_tokens: 1000,
    });

    return chatCompletion.choices[0]?.message.content;
  } catch (error) {
    console.error(error);
  }
}
