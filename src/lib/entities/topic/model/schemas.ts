import type { FromSchema } from "$lib/common/types";
import { number, object, string } from "zod";

export const topicSchema = object({
	id: number(),
	name: string(),
	groupSize: number(),
	maxRounds: number(),
	subRounds: number(),
});

export type Topic = FromSchema<typeof topicSchema>;
