export type BodyUpdateLocalRowEndpointLocalDbUpdateRowPost = {
	/**
	 * @type string
	 */
	table_name: string;
	/**
	 * @type object
	 */
	data: object;
	/**
	 * @type object
	 */
	condition: object;
	schema?: {
		[key: string]: object;
	} | null;
};
