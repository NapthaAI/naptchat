import type { Chat } from "./schemas";

export const chatsTableColumns: { key: keyof Chat; label: string }[] = [
	{ key: "id", label: "ID" },
	{ key: "topic", label: "Initial Topic" },
	{ key: "groupSize", label: "Group Size" },
	{ key: "maxRounds", label: "Max Rounds" },
	{ key: "subRounds", label: "Sub Rounds" },
];
