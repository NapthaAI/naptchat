export type OrchestratorConfig = {
	/**
	 * @default "orchestrator_config"
	 */
	config_name?: string | null;
	/**
	 * @default 5
	 */
	max_rounds?: number | null;
};
