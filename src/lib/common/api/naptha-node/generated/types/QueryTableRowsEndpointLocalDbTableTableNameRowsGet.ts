import type { HttpValidationError } from "./HttpValidationError.ts";

export type QueryTableRowsEndpointLocalDbTableTableNameRowsGetPathParams = {
	/**
	 * @type string
	 */
	table_name: string;
};

export type QueryTableRowsEndpointLocalDbTableTableNameRowsGetQueryParams = {
	columns?: string | null;
	condition?: string | null;
	order_by?: string | null;
	limit?: number | null;
};

/**
 * @description Successful Response
 */
export type QueryTableRowsEndpointLocalDbTableTableNameRowsGet200 = object;

/**
 * @description Validation Error
 */
export type QueryTableRowsEndpointLocalDbTableTableNameRowsGet422 = HttpValidationError;

export type QueryTableRowsEndpointLocalDbTableTableNameRowsGetQueryResponse =
	QueryTableRowsEndpointLocalDbTableTableNameRowsGet200;

export type QueryTableRowsEndpointLocalDbTableTableNameRowsGetQuery = {
	Response: QueryTableRowsEndpointLocalDbTableTableNameRowsGet200;
	PathParams: QueryTableRowsEndpointLocalDbTableTableNameRowsGetPathParams;
	QueryParams: QueryTableRowsEndpointLocalDbTableTableNameRowsGetQueryParams;
	Errors: QueryTableRowsEndpointLocalDbTableTableNameRowsGet422;
};
