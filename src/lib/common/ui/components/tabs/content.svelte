<script lang="ts">
	import { Tabs, type TabsContentProps } from "bits-ui";
	import { cn } from "../../utils";

	let { class: customClass, children, ...props } = $props<TabsContentProps & {}>();
</script>

<Tabs.Content {...props} class={cn("pt-3", customClass)}>
	{@render children()}
</Tabs.Content>
