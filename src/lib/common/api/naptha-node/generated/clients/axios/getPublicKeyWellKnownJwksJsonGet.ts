import client from "@kubb/plugin-client/clients/axios";
import type { GetPublicKeyWellKnownJwksJsonGetQueryResponse } from "../../types/GetPublicKeyWellKnownJwksJsonGet.ts";
import type { RequestConfig, ResponseErrorConfig } from "@kubb/plugin-client/clients/axios";

export function getGetPublicKeyWellKnownJwksJsonGetUrl() {
	return `/.well-known/jwks.json` as const;
}

/**
 * @summary Get Public Key
 * {@link /.well-known/jwks.json}
 */
export async function getPublicKeyWellKnownJwksJsonGet(config: Partial<RequestConfig> = {}) {
	const res = await client<
		GetPublicKeyWellKnownJwksJsonGetQueryResponse,
		ResponseErrorConfig<Error>,
		unknown
	>({
		method: "GET",
		url: getGetPublicKeyWellKnownJwksJsonGetUrl().toString(),
		...config,
	});

	return res;
}
