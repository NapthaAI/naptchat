import type { EnvironmentRunInput } from "./EnvironmentRunInput.ts";
import type { SecretInput } from "./SecretInput.ts";

export type BodyEnvironmentRunEndpointEnvironmentRunPost = {
	/**
	 * @type object
	 */
	environment_run_input: EnvironmentRunInput;
	/**
	 * @type array | undefined
	 */
	secrets?: SecretInput[];
};
