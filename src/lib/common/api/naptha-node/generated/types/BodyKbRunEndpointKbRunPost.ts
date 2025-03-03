import type { KBRunInput } from "./KBRunInput.ts";
import type { SecretInput } from "./SecretInput.ts";

export type BodyKbRunEndpointKbRunPost = {
	/**
	 * @type object
	 */
	kb_run_input: KBRunInput;
	/**
	 * @type array | undefined
	 */
	secrets?: SecretInput[];
};
