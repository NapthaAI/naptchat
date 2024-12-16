import type { ChatMessage } from "./ChatMessage.ts";

export type ChatCompletionRequest = {
	/**
	 * @type string
	 */
	model: string;
	/**
	 * @type array
	 */
	messages: ChatMessage[];
	temperature?: number | null;
	max_tokens?: number | null;
	top_p?: number | null;
	frequency_penalty?: number | null;
	presence_penalty?: number | null;
	stop?: string[] | null;
	stream?: boolean | null;
};
