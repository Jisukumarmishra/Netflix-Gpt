const OPENROUTER_BASE_URL = "https://openrouter.ai/api/v1";

export const createChatCompletion = async (messages, model = "openai/gpt-4o-mini") => {
	const apiKey = process.env.REACT_APP_OPEN_API_KEY;

	const response = await fetch(`${OPENROUTER_BASE_URL}/chat/completions`, {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
			Authorization: `Bearer ${apiKey}`,
		},
		body: JSON.stringify({
			model,
			messages,
		}),
	});

	const data = await response.json().catch(() => ({}));
	return data;
};
