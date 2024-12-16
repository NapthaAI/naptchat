import type { AgentModuleType } from "./AgentModuleType.ts";

export type AgentModule = {
	/**
	 * @type string
	 */
	id: string;
	/**
	 * @type string
	 */
	name: string;
	/**
	 * @type string
	 */
	description: string;
	/**
	 * @type string
	 */
	author: string;
	/**
	 * @type string
	 */
	url: string;
	/**
	 * @type string
	 */
	type: AgentModuleType;
	/**
	 * @type string
	 */
	version: string;
	/**
	 * @default "run.py"
	 */
	entrypoint?: string | null;
	personas_urls?: string[] | null;
};
