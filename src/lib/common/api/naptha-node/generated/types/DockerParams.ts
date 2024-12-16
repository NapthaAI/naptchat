export type DockerParams = {
	/**
	 * @type string
	 */
	docker_image: string;
	/**
	 * @default ""
	 */
	docker_command?: string | null;
	/**
	 * @default 0
	 */
	docker_num_gpus?: number | null;
	docker_env_vars?: object | null;
	input_dir?: string | null;
	input_ipfs_hash?: string | null;
	docker_input_dir?: string | null;
	docker_output_dir?: string | null;
	/**
	 * @default "node"
	 * @type string | undefined
	 */
	save_location?: string;
};
