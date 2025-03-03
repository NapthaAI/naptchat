import type { FromSchema } from "$lib/common/types";
import { number, object, string } from "zod";
import * as z from "zod";

export const chatSchemaMock = object({
	id: number(),
	topic: string(),
	groupSize: number(),
	maxRounds: number(),
	subRounds: number(),
});

export type Chat = FromSchema<typeof chatSchemaMock>;

// Schema for chat creation form
export const chatCreationSchema = z.object({
	topic: z.string().min(3, "Topic must be at least 3 characters"),
	groupSize: z
		.number()
		.int()
		.min(2, "Group size must be at least 2")
		.max(10, "Group size cannot exceed 10"),
	maxRounds: z
		.number()
		.int()
		.min(1, "Max rounds must be at least 1")
		.max(10, "Max rounds cannot exceed 10"),
	subRounds: z
		.number()
		.int()
		.min(1, "Sub rounds must be at least 1")
		.max(5, "Sub rounds cannot exceed 5"),
});

export type ChatCreationData = FromSchema<typeof chatCreationSchema>;
