<script lang="ts">
	import { Tabs, type TabsTriggerProps } from "bits-ui";
	import { cn } from "../../utils";

	const { class: customClass, children, ...props } = $props<TabsTriggerProps & {}>();
</script>

<Tabs.Trigger
	{...props}
	class={cn(
		"h-8 rounded-[7px] bg-transparent py-2 data-[state=active]:bg-white",
		"data-[state=active]:shadow-mini dark:data-[state=active]:bg-muted",
		customClass,
	)}
>
	{@render children()}
</Tabs.Trigger>
