import type { FromSchema } from "$lib/common/types";
import { number, object, string } from "zod";

export const chatSchema = object({
	id: number(),
	topic: string(),
	groupSize: number(),
	maxRounds: number(),
	subRounds: number(),
});

export type Chat = FromSchema<typeof chatSchema>;
