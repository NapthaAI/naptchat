import * as secp from "@noble/secp256k1";

export const generateKeyPair = () => {
	const privKey = secp.utils.randomPrivateKey();
	const pubKey = secp.getPublicKey(privKey);

	return { privKey, pubKey };
};

/**
 *
 * @param msg Message to sign
 * @param privKey Private key
 * @returns Hexadecimal signature string
 */
export const sign = async (msg: string, privKey: secp.Bytes): Promise<string> => {
	const msgHash = await crypto.subtle.digest("SHA-256", new TextEncoder().encode(msg));
	const signature = await secp.signAsync(new Uint8Array(msgHash), privKey);

	return signature.toCompactHex();
};
