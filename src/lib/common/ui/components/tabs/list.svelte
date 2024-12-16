<script lang="ts">
	import { Tabs, type TabsListProps } from "bits-ui";
	import { cn } from "../../utils";

	const { class: customClass, children, ...props } = $props<TabsListProps & {}>();
</script>

<Tabs.List
	{...props}
	class={cn(
		"grid w-full grid-cols-2 gap-1 rounded-9px bg-dark/10",
		"p-1 text-sm font-semibold leading-[0.01em] shadow-mini-inset",
		"dark:border dark:border-neutral-600/30 dark:bg-background",
		customClass,
	)}
>
	{@render children()}
</Tabs.List>
