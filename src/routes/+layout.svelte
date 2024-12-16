<script lang="ts">
	import { ModeWatcher } from "mode-watcher";
	import "uno.css";
	import "@unocss/reset/tailwind-compat.css";
	import "../app.css";
	import Button from "$lib/common/ui/components/button.svelte";

	let { children, data } = $props();
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
	<Button borderless><a href="/">🏠 Discover</a></Button>

	<div flex="~ wrap" gap="4">
		<Button class="bg-secondary text-secondary-foreground">💬 New Chat</Button>
		<Button disabled>Sign Up</Button>
	</div>
</nav>

<main flex="~ col" w="full" class="min-h-screen">
	{@render children()}
</main>
