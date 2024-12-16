export const operations = {
	health_check_health_get: {
		path: "/health",
		method: "get",
	},
	agent_run_endpoint_agent_run_post: {
		path: "/agent/run",
		method: "post",
	},
	agent_check_endpoint_agent_check_post: {
		path: "/agent/check",
		method: "post",
	},
	orchestrator_run_endpoint_orchestrator_run_post: {
		path: "/orchestrator/run",
		method: "post",
	},
	orchestrator_check_endpoint_orchestrator_check_post: {
		path: "/orchestrator/check",
		method: "post",
	},
	environment_run_endpoint_environment_run_post: {
		path: "/environment/run",
		method: "post",
	},
	environment_check_endpoint_environment_check_post: {
		path: "/environment/check",
		method: "post",
	},
	storage_write_endpoint_storage_write_post: {
		path: "/storage/write",
		method: "post",
	},
	storage_read_endpoint_storage_read__job_id__get: {
		path: "/storage/read/:job_id",
		method: "get",
	},
	storage_write_ipfs_endpoint_storage_write_ipfs_post: {
		path: "/storage/write_ipfs",
		method: "post",
	},
	storage_read_ipfs_or_ipns_endpoint_storage_read_ipfs__hash_or_name__get: {
		path: "/storage/read_ipfs/:hash_or_name",
		method: "get",
	},
	user_check_endpoint_user_check_post: {
		path: "/user/check",
		method: "post",
	},
	user_register_endpoint_user_register_post: {
		path: "/user/register",
		method: "post",
	},
	monitor_create_agent_run_endpoint_monitor_create_agent_run_post: {
		path: "/monitor/create_agent_run",
		method: "post",
	},
	monitor_update_agent_run_endpoint_monitor_update_agent_run_post: {
		path: "/monitor/update_agent_run",
		method: "post",
	},
	create_local_table_endpoint_local_db_create_table_post: {
		path: "/local-db/create-table",
		method: "post",
	},
	add_local_row_endpoint_local_db_add_row_post: {
		path: "/local-db/add-row",
		method: "post",
	},
	update_local_row_endpoint_local_db_update_row_post: {
		path: "/local-db/update-row",
		method: "post",
	},
	delete_local_row_endpoint_local_db_delete_row_post: {
		path: "/local-db/delete-row",
		method: "post",
	},
	list_tables_endpoint_local_db_tables_get: {
		path: "/local-db/tables",
		method: "get",
	},
	get_table_schema_endpoint_local_db_table__table_name__get: {
		path: "/local-db/table/:table_name",
		method: "get",
	},
	query_table_rows_endpoint_local_db_table__table_name__rows_get: {
		path: "/local-db/table/:table_name/rows",
		method: "get",
	},
	chat_endpoint_inference_chat_post: {
		path: "/inference/chat",
		method: "post",
	},
} as const;
