import type { HttpValidationError } from "./HttpValidationError.ts";

export type GetTableSchemaEndpointLocalDbTableTableNameGetPathParams = {
	/**
	 * @type string
	 */
	table_name: string;
};

/**
 * @description Successful Response
 */
export type GetTableSchemaEndpointLocalDbTableTableNameGet200 = object;

/**
 * @description Validation Error
 */
export type GetTableSchemaEndpointLocalDbTableTableNameGet422 = HttpValidationError;

export type GetTableSchemaEndpointLocalDbTableTableNameGetQueryResponse =
	GetTableSchemaEndpointLocalDbTableTableNameGet200;

export type GetTableSchemaEndpointLocalDbTableTableNameGetQuery = {
	Response: GetTableSchemaEndpointLocalDbTableTableNameGet200;
	PathParams: GetTableSchemaEndpointLocalDbTableTableNameGetPathParams;
	Errors: GetTableSchemaEndpointLocalDbTableTableNameGet422;
};
