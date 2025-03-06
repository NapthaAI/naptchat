import { napthaNodeClient, type User } from "$common/api/naptha-node";
import { getSecurePrivateKey, sign } from "$common/utils/crypto";
import type { ChatCreationInputs } from "./schemas";

export type CreateChatArgs = {
	user: User;
	inputs: ChatCreationInputs;
};

export const createChat = ({ user, inputs }: CreateChatArgs) =>
	getSecurePrivateKey()
		.then((privateKey) => {
			if (!privateKey) {
				throw new Error("Failed to access your private key");
			} else {
				return sign(user.id, privateKey);
			}
		})
		.then((signature) => {
			return napthaNodeClient.multiagentChatOrchestratorRun({
				userId: user.id,
				signature,

				inputs: {
					title: inputs.topic,
				},
			});
		});
