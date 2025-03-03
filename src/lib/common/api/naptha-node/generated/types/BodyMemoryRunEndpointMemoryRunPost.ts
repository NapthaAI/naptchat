import type { MemoryRunInput } from "./MemoryRunInput.ts";
import type { SecretInput } from "./SecretInput.ts";

export type BodyMemoryRunEndpointMemoryRunPost = {
	/**
	 * @type object
	 */
	memory_run_input: MemoryRunInput;
	/**
	 * @type array | undefined
	 */
	secrets?: SecretInput[];
};
