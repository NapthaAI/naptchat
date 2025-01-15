import * as secp from "@noble/secp256k1";

export const generateKeyPair = async () => {
	const privKey = secp.utils.randomPrivateKey();
	const pubKey = secp.getPublicKey(privKey);

	return { privKey, pubKey };
};

export const sign = async (msg: string, privKey: secp.Bytes) =>
	await crypto.subtle
		.digest(
			"SHA-256",
			new TextEncoder()
				.encode(msg)
				.map((b) => b.toString(16).padStart(2, "0"))
				.join(""),
		)
		.then((msgHash) => secp.signAsync(msgHash, privKey))
		.catch(console.error);
