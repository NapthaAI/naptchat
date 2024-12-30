<script lang="ts">
	import { Button, type ButtonProps } from "bits-ui";
	import { cn } from "$lib/common/ui/utils";

	let {
		borderless = false,
		disabled,
		onClick,
		href,
		class: customClass,
		children,
	} = $props<{
		borderless?: boolean;
		disabled?: boolean;
		onClick?: () => void;
		href?: ButtonProps["href"];
		class?: string;
		children?: any;
	}>();
</script>

<Button.Root
	bind:disabled
	on:click={onClick}
	bind:href
	class={cn(
		"inline-flex h-12 items-center justify-center border-2 rounded-lg",
		"px-5 text-lg font-semibold bg-background text-foreground",
		"disabled:cursor-not-allowed disabled:bg-op-50 disabled:border-op-50",
		"disabled:text-muted-foreground active:scale-98 active:transition-all",
		{ "hover:bg-white/10": !disabled },
		{ "border-0": borderless },
		customClass,
	)}
>
	{@render children()}
</Button.Root>
