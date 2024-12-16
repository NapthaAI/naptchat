<script lang="ts">
	import { ModeWatcher } from "mode-watcher";
	import "uno.css";
	import "@unocss/reset/tailwind-compat.css";
	import "../app.css";

	let { children, data } = $props();
</script>

<ModeWatcher />

<main flex="~ col" w="full" class="min-h-screen">
	{@render children()}
</main>
