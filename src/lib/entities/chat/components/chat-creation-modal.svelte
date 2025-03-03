<script lang="ts">
	import { Button } from "$common/ui/components";
	import { createForm } from "felte";
	import { validator } from "@felte/validator-zod";
	import { napthaNodeClient } from "$common/api/naptha-node";
	import { getSecurePrivateKey, sign } from "$common/utils/crypto";
	import type { User } from "$common/api/naptha-node";
	import { chatCreationSchema, type ChatCreationData } from "../model/schemas";
	import { fade } from "svelte/transition";

	let {
		data,
		isOpen = false,
		onClose,
	} = $props<{
		data?: {
			session: {
				subscribe: (callback: (user: User | null) => void) => () => void;
			};
		};
		isOpen?: boolean;
		onClose?: () => void;
	}>();

	let authenticatedUser = $state<User | null>(null);
	let isCreating = $state(false);
	let error = $state<string | null>(null);
	let success = $state<boolean>(false);

	$effect(() => {
		if (data?.session) {
			return data.session.subscribe((user: User | null) => {
				authenticatedUser = user;
			});
		}
	});

	const defaultValues: ChatCreationData = {
		topic: "",
		groupSize: 3,
		maxRounds: 3,
		subRounds: 2,
	};

	const {
		form: formAction,
		errors,
		isValid,
		reset,
		data: formData,
	} = createForm({
		initialValues: defaultValues,
		extend: validator({ schema: chatCreationSchema }) as any,
		onSubmit: (values) => {
			isCreating = true;
			error = null;
			success = false;

			return getSecurePrivateKey()
				.then((privateKey) => {
					// Check authentication first
					if (!authenticatedUser) {
						error = "You must be signed in to create a chat";
						isCreating = false;
						throw new Error("You must be signed in to create a chat");
					}

					// Then check if we have a private key
					if (!privateKey) {
						error = "Failed to access your private key";
						isCreating = false;
						throw new Error("Failed to access your private key");
					}

					return sign(authenticatedUser.id, privateKey);
				})
				.then((signature) => {
					return napthaNodeClient.multiagentChatOrchestratorRun({
						// At this point we know authenticatedUser is not null
						userId: authenticatedUser!.id,
						signature,

						// TODO: Normalize values to match the BaseModel type
						inputs: values,
					});
				})
				.then((response) => {
					console.log("Chat created:", response.data);
					success = true;

					reset();
					onClose?.();
				})
				.catch((err) => {
					console.error("Error creating chat:", err);
					error = err instanceof Error ? err.message : "Failed to create chat";
				})
				.finally(() => {
					isCreating = false;
				});
		},
	});

	function handleClose() {
		onClose?.();
	}
</script>

{#if isOpen}
	<dialog
		class="fixed inset-0 bg-black/50 flex items-center justify-center"
		transition:fade
		open={isOpen}
		onclose={handleClose}
	>
		<div class="bg-background p-6 rounded-lg shadow-lg max-w-md w-full mx-4">
			<div flex="~ row" justify="between" items="center" mb="4">
				<h2 class="text-xl font-bold">Create New Chat</h2>
				<Button borderless onClick={handleClose} class="text-muted-foreground">✕</Button>
			</div>

			<div flex="~ col" gap="4">
				{#if !authenticatedUser}
					<p text="red-500">You must be signed in to create a chat</p>
				{:else}
					<form use:formAction class="flex flex-col gap-4">
						<div flex="~ col" gap="2">
							<label for="topic" text="sm" font="medium">Chat Topic</label>
							<input
								id="topic"
								name="topic"
								type="text"
								placeholder="Enter a topic for the chat"
								bg="background"
								border="2 rounded-lg"
								p="x-4 y-2"
								w="full"
								class="placeholder:text-gray-400"
								disabled={isCreating}
							/>
							{#if errors.topic}
								<p text="sm red-500">{errors.topic[0]}</p>
							{/if}
						</div>

						<div flex="~ col" gap="2">
							<label for="groupSize" text="sm" font="medium">Group Size</label>
							<input
								id="groupSize"
								name="groupSize"
								type="number"
								min="2"
								max="10"
								bg="background"
								border="2 rounded-lg"
								p="x-4 y-2"
								w="full"
								disabled={isCreating}
							/>
							{#if errors.groupSize}
								<p text="sm red-500">{errors.groupSize[0]}</p>
							{/if}
						</div>

						<div flex="~ col" gap="2">
							<label for="maxRounds" text="sm" font="medium">Max Rounds</label>
							<input
								id="maxRounds"
								name="maxRounds"
								type="number"
								min="1"
								max="10"
								bg="background"
								border="2 rounded-lg"
								p="x-4 y-2"
								w="full"
								disabled={isCreating}
							/>
							{#if errors.maxRounds}
								<p text="sm red-500">{errors.maxRounds[0]}</p>
							{/if}
						</div>

						<div flex="~ col" gap="2">
							<label for="subRounds" text="sm" font="medium">Sub Rounds</label>
							<input
								id="subRounds"
								name="subRounds"
								type="number"
								min="1"
								max="5"
								bg="background"
								border="2 rounded-lg"
								p="x-4 y-2"
								w="full"
								disabled={isCreating}
							/>
							{#if errors.subRounds}
								<p text="sm red-500">{errors.subRounds[0]}</p>
							{/if}
						</div>

						{#if error}
							<p text="sm red-500">{error}</p>
						{/if}

						{#if success}
							<p text="sm green-500">Chat created successfully!</p>
						{/if}

						<Button
							type="submit"
							disabled={!isValid || isCreating}
							class="w-full bg-primary text-primary-foreground"
						>
							{#if isCreating}
								Creating...
							{:else}
								Create Chat
							{/if}
						</Button>
					</form>
				{/if}
			</div>
		</div>
	</dialog>
{/if}
