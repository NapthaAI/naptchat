export type UserId = string;

/**
 * Hexadecimal string derived from a secp256k1 signature of {@link UserId}
 */
export type UserSignature = string;

export type User = {
	id: UserId;
	public_key: string;
};

export interface ByUserId {
	userId: UserId;
}

export interface BySignature {
	signature: UserSignature;
}
