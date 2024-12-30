<script lang="ts">
	import { Tabs } from "$common/ui/components";
	import type { PageData } from "./$types";

	let { data }: { data: PageData } = $props();
</script>

<div flex="~" items="center" h="full" border="t-foreground t-2">
	<aside flex="~ col" h="full" border="r-foreground r-2">
		<header flex="~ row" items="center" justify="center" p="6">
			<h1 text="xl" font="bold">{data.topic}</h1>
		</header>

		<Tabs.Root value="outbound" class="w-100">
			<Tabs.List>
				<Tabs.Trigger value="outbound">Cohorts</Tabs.Trigger>
				<Tabs.Trigger value="inbound">Agents</Tabs.Trigger>
			</Tabs.List>

			<Tabs.Content value="outbound">List of cohorts to be here</Tabs.Content>
			<Tabs.Content value="inbound">List of agents to be here</Tabs.Content>
		</Tabs.Root>
	</aside>

	<section flex="~ col" w="full" h="full" p="8"></section>
</div>
