export type BodyStorageWriteIpfsEndpointStorageWriteIpfsPost = {
	/**
	 * @default false
	 * @type boolean | undefined
	 */
	publish_to_ipns?: boolean;
	update_ipns_name?: string | null;
	/**
	 * @type string, binary
	 */
	file: Blob;
};
