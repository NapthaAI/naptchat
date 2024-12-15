<script lang="ts">
	import { ModeWatcher } from "mode-watcher";
	import "../app.css";
	let { children } = $props();
</script>

<ModeWatcher />

<main class="flex flex-col min-h-screen dark">
	{@render children()}
</main>

<style>
	:global(body) {
		margin: 0;
	}
</style>
