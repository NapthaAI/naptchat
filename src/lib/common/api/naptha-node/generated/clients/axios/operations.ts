export const operations = {
	health_check_health_get: {
		path: "/health",
		method: "get",
	},
	get_public_key__well_known_jwks_json_get: {
		path: "/.well-known/jwks.json",
		method: "get",
	},
	agent_create_endpoint_agent_create_post: {
		path: "/agent/create",
		method: "post",
	},
	agent_run_endpoint_agent_run_post: {
		path: "/agent/run",
		method: "post",
	},
	agent_check_endpoint_agent_check_post: {
		path: "/agent/check",
		method: "post",
	},
	tool_create_endpoint_tool_create_post: {
		path: "/tool/create",
		method: "post",
	},
	tool_run_endpoint_tool_run_post: {
		path: "/tool/run",
		method: "post",
	},
	tool_check_endpoint_tool_check_post: {
		path: "/tool/check",
		method: "post",
	},
	orchestrator_create_endpoint_orchestrator_create_post: {
		path: "/orchestrator/create",
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
	environment_create_endpoint_environment_create_post: {
		path: "/environment/create",
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
	kb_create_endpoint_kb_create_post: {
		path: "/kb/create",
		method: "post",
	},
	kb_run_endpoint_kb_run_post: {
		path: "/kb/run",
		method: "post",
	},
	kb_check_endpoint_kb_check_post: {
		path: "/kb/check",
		method: "post",
	},
	memory_create_endpoint_memory_create_post: {
		path: "/memory/create",
		method: "post",
	},
	memory_run_endpoint_memory_run_post: {
		path: "/memory/run",
		method: "post",
	},
	memory_check_endpoint_memory_check_post: {
		path: "/memory/check",
		method: "post",
	},
	user_check_endpoint_user_check_post: {
		path: "/user/check",
		method: "post",
	},
	user_register_endpoint_user_register_post: {
		path: "/user/register",
		method: "post",
	},
	user_secret_create_endpoint_user_secret_create_post: {
		path: "/user/secret/create",
		method: "post",
	},
	create_storage_object_storage__storage_type__create__path__post: {
		path: "/storage/:storage_type/create/:path",
		method: "post",
	},
	read_storage_object_storage__storage_type__read__path__get: {
		path: "/storage/:storage_type/read/:path",
		method: "get",
	},
	delete_storage_object_storage__storage_type__delete__path__delete: {
		path: "/storage/:storage_type/delete/:path",
		method: "delete",
	},
	list_storage_objects_storage__storage_type__list__path__get: {
		path: "/storage/:storage_type/list/:path",
		method: "get",
	},
	search_storage_objects_storage__storage_type__search_post: {
		path: "/storage/:storage_type/search",
		method: "post",
	},
	update_storage_object_storage__storage_type__update__path__put: {
		path: "/storage/:storage_type/update/:path",
		method: "put",
	},
	models_endpoint_inference_models_get: {
		path: "/inference/models",
		method: "get",
	},
	chat_completions_endpoint_inference_chat_completions_post: {
		path: "/inference/chat/completions",
		method: "post",
	},
	completions_endpoint_inference_completions_post: {
		path: "/inference/completions",
		method: "post",
	},
	embeddings_endpoint_inference_embeddings_post: {
		path: "/inference/embeddings",
		method: "post",
	},
} as const;
