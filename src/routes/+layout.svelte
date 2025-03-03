<script lang="ts">
	import "@unocss/reset/tailwind-compat.css";
	import "uno.css";
	import "../app.css";
	import { ModeWatcher } from "mode-watcher";
	import { Button } from "$common/ui/components";
	import { fade } from "svelte/transition";
	import type { User } from "$common/api/naptha-node";

	let { children, data } = $props();

	let authenticatedUser = $state<User | null>(null);
	let isAuthModalOpen = $state(false);
	let copySuccess = $state(false);
	let publicKeyFieldValue = $state<string | undefined>();

	$effect(() => {
		return data.session.subscribe((sessionData) => {
			if (sessionData === null) {
				authenticatedUser = null;
				isAuthModalOpen = true;
			} else {
				if (sessionData.public_key !== authenticatedUser?.public_key) {
					authenticatedUser = sessionData;
				}

				if (publicKeyFieldValue === undefined) {
					publicKeyFieldValue = sessionData.public_key;
				}
			}

			console.log("SESSION DATA", authenticatedUser);
		});
	});

	$effect(
		data.orchestratorStatus.subscribe((orchestratorStatus) =>
			console.log("ORCHESTRATOR STATUS IS", orchestratorStatus),
		),
	);

	const handleSignUp = () => {
		data.actions.signUp();
	};

	const handleSignIn = () => {
		if (publicKeyFieldValue !== undefined) {
			data.actions.signIn({ publicKey: publicKeyFieldValue });
			isAuthModalOpen = false;
		}
	};

	const handleSignOut = () => {
		data.actions.signOut();
		authenticatedUser = null;
	};

	function copyToClipboard() {
		if (navigator.clipboard && publicKeyFieldValue) {
			void navigator.clipboard
				.writeText(publicKeyFieldValue)
				.then(() => {
					copySuccess = true;
				})
				.catch((error) => {
					copySuccess = false;
					console.error("Failed to copy:", error);
				})
				.finally(() =>
					setTimeout(() => {
						copySuccess = false;
					}, 3000),
				);
		}
	}
</script>

<ModeWatcher />

<nav
	flex="~ row"
	w="full"
	items="start"
	justify="between"
	bg="black"
	text="foreground"
	p="6"
	gap="4"
>
	<Button borderless href="/">🏠 Discover</Button>

	<div flex="~ wrap" gap="4" items="center">
		<Button class="bg-secondary text-secondary-foreground">💬 New Chat</Button>

		{#if authenticatedUser?.id}
			<span class="text-sm opacity-75 max-w-25 text-ellipsis overflow-clip"
				>@{authenticatedUser.id}</span
			>
			<Button onClick={handleSignOut}>Sign Out</Button>
		{:else}
			<Button onClick={() => (isAuthModalOpen = true)}>Sign In</Button>
		{/if}
	</div>
</nav>

{#if isAuthModalOpen}
	<dialog
		class="fixed inset-0 bg-black/50 flex items-center justify-center"
		transition:fade
		open={isAuthModalOpen}
		onclose={() => (isAuthModalOpen = false)}
	>
		<div class="bg-background p-6 rounded-lg shadow-lg max-w-md w-full mx-4">
			<h2 class="text-xl font-bold mb-4">Authentication</h2>

			<div flex="~ col" gap="4">
				{#if authenticatedUser}
					<div class="flex items-center gap-2">
						<span class="text-sm opacity-75">Your public key:</span>
						<input value={publicKeyFieldValue} class="bg-muted p-1 rounded text-sm" />

						<Button class="ml-auto" onClick={copyToClipboard} disabled={copySuccess}>
							{#if copySuccess}
								✓
							{:else}
								📋
							{/if}
						</Button>
					</div>

					<Button class="w-full" onClick={handleSignIn}>
						<span flex="inline" gap="1">
							<span>Sign In as</span>

							<span class="max-w-25 text-ellipsis overflow-clip">
								@{authenticatedUser.id}
							</span>
						</span>
					</Button>
				{/if}

				<Button class="w-full" onClick={handleSignUp}>Sign Up as new user</Button>
			</div>
		</div>
	</dialog>
{/if}

<main flex="~ col" w="full" class="min-h-screen">
	{@render children()}
</main>
