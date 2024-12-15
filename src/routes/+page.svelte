<script lang="ts">
	import { topicsTableColumns } from "$lib/entities/topic";
	import type { PageData } from "./$types";
	import { Table, Button } from "$lib/common/ui/components";

	let { data }: { data: PageData } = $props();

	let searchTerm = $state("");

	// Filter topics based on search query
	let filteredTopics = $derived(
		searchTerm
			? data.topics.filter((topic) => topic.name.toLowerCase().includes(searchTerm.toLowerCase()))
			: data.topics,
	);
</script>

<section flex="~ col" items="center" gap="8">
	<header
		flex="~ row"
		w="full"
		items="start"
		justify="between"
		bg="black"
		text="white"
		p="6"
		gap="4"
	>
		<div flex="~ col" gap="2">
			<h2 text="2xl" font="bold">Discover</h2>
			<p text="muted-foreground lg" font="400">Group Chats -- {filteredTopics.length} Total</p>
		</div>

		<div flex="~ col" gap="4" items="center">
			<h1 text="3xl" font="bold">Napchat</h1>

			<div class="w-96">
				<input
					type="text"
					placeholder="Search Topics"
					bg="transparent"
					border="2 white rounded"
					p="x-4 y-2"
					w="full"
					class="placeholder:text-gray-400"
					bind:value={searchTerm}
				/>
			</div>
		</div>

		<div flex="~ wrap" gap="4">
			<Button class="border-2">Create</Button>
			<Button class="border-2">Sign Up</Button>
		</div>
	</header>

	<Table data={filteredTopics} columns={topicsTableColumns} rootClass="max-w-6xl" />
</section>
