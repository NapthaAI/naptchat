import type { SecretInput } from "./SecretInput.ts";

export type BodyUserSecretCreateEndpointUserSecretCreatePost = {
	/**
	 * @type array | undefined
	 */
	existing_secrets?: SecretInput[];
	/**
	 * @type array | undefined
	 */
	secrets?: SecretInput[];
};
