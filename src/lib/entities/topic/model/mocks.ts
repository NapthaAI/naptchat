import type { Topic } from "./schemas";

const FAKE_TOPICS = [
	{
		id: 1,
		name: "Human agency in AI-generated art",
		groupSize: 4,
		maxRounds: 10,
		subRounds: 7,
	},

	{
		id: 2,
		name: "AI-driven deep cryptocurrency market analysis",
		groupSize: 10,
		maxRounds: 5,
		subRounds: 10,
	},
];

export const getTopics = (): Promise<Topic[]> => new Promise((resolve) => resolve(FAKE_TOPICS));
