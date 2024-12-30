import type { Chat } from "./schemas";

const FAKE_CHATS = [
	{
		id: 1,
		topic: "Human agency in AI-generated art",
		groupSize: 4,
		maxRounds: 10,
		subRounds: 7,
	},

	{
		id: 2,
		topic: "AI-driven deep cryptocurrency market analysis",
		groupSize: 10,
		maxRounds: 5,
		subRounds: 10,
	},
];

export const getChats = (): Promise<Chat[]> => new Promise((resolve) => resolve(FAKE_CHATS));
