import type { BodyUserSecretCreateEndpointUserSecretCreatePost } from "./BodyUserSecretCreateEndpointUserSecretCreatePost.ts";
import type { HTTPValidationError } from "./HTTPValidationError.ts";

export type UserSecretCreateEndpointUserSecretCreatePostQueryParams = {
	/**
	 * @type string
	 */
	signature: string;
	/**
	 * @default false
	 */
	is_update?: boolean | null;
};

/**
 * @description Successful Response
 */
export type UserSecretCreateEndpointUserSecretCreatePost200 = any;

/**
 * @description Validation Error
 */
export type UserSecretCreateEndpointUserSecretCreatePost422 = HTTPValidationError;

export type UserSecretCreateEndpointUserSecretCreatePostMutationRequest =
	BodyUserSecretCreateEndpointUserSecretCreatePost;

export type UserSecretCreateEndpointUserSecretCreatePostMutationResponse =
	UserSecretCreateEndpointUserSecretCreatePost200;

export type UserSecretCreateEndpointUserSecretCreatePostMutation = {
	Response: UserSecretCreateEndpointUserSecretCreatePost200;
	Request: UserSecretCreateEndpointUserSecretCreatePostMutationRequest;
	QueryParams: UserSecretCreateEndpointUserSecretCreatePostQueryParams;
	Errors: UserSecretCreateEndpointUserSecretCreatePost422;
};
