<script lang="ts">
	import { Tabs, type TabsProps } from "bits-ui";
	import { cn } from "../../utils";

	const { class: customClass, children, ...props } = $props<TabsProps & {}>();
</script>

<Tabs.Root {...props} class={cn("rounded-lg bg-background-alt p-3 shadow-card", customClass)}>
	{@render children()}
</Tabs.Root>
