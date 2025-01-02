<script lang="ts">
	import "@unocss/reset/tailwind-compat.css";
	import "uno.css";
	import "../app.css";
	import { ModeWatcher } from "mode-watcher";
	import { Button } from "$common/ui/components";
	import { fade } from "svelte/transition";

	let { children, data } = $props();
	let userId = $state<string | null>(null);
	let isAuthModalOpen = $state(false);
	let copySuccess = $state(false);
	let newUserId = $state("");

	$effect(() =>
		data.userId.subscribe((id) => {
			if (id === null) {
				userId = null;
				isAuthModalOpen = true;
			} else {
				userId = id;
			}
			console.log("userId is", id);
		}),
	);

	async function handleSignUp() {
		try {
			newUserId = await data.actions.signUp();
		} catch (error) {
			console.error("Failed to sign up:", error);
		}
	}

	function handleSignIn() {
		data.actions.signIn(newUserId);
		isAuthModalOpen = false;
	}

	function handleSignOut() {
		data.actions.signOut();
	}

	function copyToClipboard() {
		if (navigator.clipboard) {
			void navigator.clipboard
				.writeText(newUserId)
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

		{#if userId}
			<span class="text-sm opacity-75">@{userId}</span>
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

			{#if newUserId}
				<div class="space-y-4">
					<div class="flex items-center gap-2">
						<span class="text-sm opacity-75">Your User ID:</span>
						<code class="bg-muted p-1 rounded text-sm">{newUserId}</code>

						<Button class="ml-auto" onClick={copyToClipboard} disabled={copySuccess}>
							{#if copySuccess}
								✓
							{:else}
								📋
							{/if}
						</Button>
					</div>

					<Button class="w-full" onClick={handleSignIn}>
						Sign In as @{newUserId}
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
