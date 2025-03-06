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

/**
 * https://github.com/NapthaAI/multiagent_chat/blob/0c62f86fc01cbbf0cbb4b072c35a356b6675a271/multiagent_chat/schemas.py
 */
export type MultiagentChatInputs = {
	title: string;
};
