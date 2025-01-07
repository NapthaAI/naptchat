<script lang="ts">
	import "@unocss/reset/tailwind-compat.css";
	import "uno.css";
	import "../app.css";
	import { ModeWatcher } from "mode-watcher";
	import { Button } from "$common/ui/components";
	import { fade } from "svelte/transition";
	import type { User } from "$common/api/naptha-node";

	let { children, data } = $props();
	const test = $wrap({ status: data.orchestratorStatus });

	$inspect(test.status);

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

			console.log("authenticatedUser is", authenticatedUser);
		});
	});

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
			<span class="text-sm opacity-75">@{authenticatedUser.id}</span>
			<Button onClick={handleSignOut}>Sign Out</Button>
		{:else}
			<Button onClick={() => (isAuthModalOpen = true)}>Sign Up</Button>
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

			{#if authenticatedUser}
				<div class="space-y-4">
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
						Sign In as @{authenticatedUser.id}
					</Button>
				</div>
			{:else}
				<Button class="w-full" onClick={handleSignUp}>Sign Up</Button>
			{/if}
		</div>
	</dialog>
{/if}

<main flex="~ col" w="full" class="min-h-screen">
	{@render children()}
</main>
