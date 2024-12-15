<script lang="ts">
	import "uno.css";
	import { ModeWatcher } from "mode-watcher";
	import "../app.css";

	let { children, data } = $props();
</script>

<ModeWatcher />

<main class="flex flex-col min-h-screen dark">
	{@render children()}
</main>
