<script lang="ts">
	import { Button } from "bits-ui";
	import { cn } from "$lib/common/ui/utils";

	let {
		class: className,
		onClick,
		children,
	} = $props<{
		class?: string;
		onClick?: () => void;
		children?: any;
	}>();
</script>

<Button.Root
	class={cn(
		"inline-flex h-12 items-center justify-center rounded border-foreground",
		"px-5 text-lg font-semibold bg-background text-foreground hover:bg-white/10",
		"active:scale-98 active:transition-all",
		className,
	)}
	on:click={onClick}
>
	{@render children()}
</Button.Root>
