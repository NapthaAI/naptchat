import type { Topic } from "./schemas";

// Column definitions with display names and sort keys
export const topicsTableColumns: { key: keyof Topic; label: string }[] = [
	{ key: "id", label: "ID" },
	{ key: "name", label: "Initial Topic" },
	{ key: "groupSize", label: "Group Size" },
	{ key: "maxRounds", label: "Max Rounds" },
	{ key: "subRounds", label: "Sub Rounds" },
];
