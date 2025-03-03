import type { SecretInput } from "./SecretInput.ts";
import type { ToolRunInput } from "./ToolRunInput.ts";

export type BodyToolRunEndpointToolRunPost = {
	/**
	 * @type object
	 */
	tool_run_input: ToolRunInput;
	/**
	 * @type array | undefined
	 */
	secrets?: SecretInput[];
};
