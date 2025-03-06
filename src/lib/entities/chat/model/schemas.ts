import type { FromSchema } from "$lib/common/types";
import { number, object, string } from "zod";

export type Chat = {
	id: number;
	topic: string;
	groupSize: number;
	maxRounds: number;
	subRounds: number;
};

export const chatCreationSchema = object({
	topic: string().min(3, "Topic must be at least 3 characters"),

	groupSize: number()
		.int()
		.min(2, "Group size must be at least 2")
		.max(10, "Group size cannot exceed 10"),

	maxRounds: number()
		.int()
		.min(1, "Max rounds must be at least 1")
		.max(10, "Max rounds cannot exceed 10"),

	subRounds: number()
		.int()
		.min(1, "Sub rounds must be at least 1")
		.max(5, "Sub rounds cannot exceed 5"),
});

export type ChatCreationInputs = FromSchema<typeof chatCreationSchema>;

export const chatCreationDefaults: ChatCreationInputs = {
	topic: "",
	groupSize: 1,
	maxRounds: 1,
	subRounds: 1,
};
