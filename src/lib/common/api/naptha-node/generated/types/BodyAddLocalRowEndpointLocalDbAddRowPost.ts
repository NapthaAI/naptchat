export type BodyAddLocalRowEndpointLocalDbAddRowPost = {
	/**
	 * @type string
	 */
	table_name: string;
	/**
	 * @type object
	 */
	data: object;
	schema?: {
		[key: string]: object;
	} | null;
};
