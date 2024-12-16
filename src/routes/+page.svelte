<script lang="ts">
	import { chatsTableColumns } from "$entities/chat";
	import type { PageData } from "./$types";
	import { Table } from "$common/ui/components";

	const { data }: { data: PageData } = $props();

	let chatSearchTerm = $state("");

	const filteredChats = $derived(
		chatSearchTerm
			? data.chats.filter(({ topic }) => topic.toLowerCase().includes(chatSearchTerm.toLowerCase()))
			: data.chats,
	);
</script>

<div flex="~ col" items="center" gap="8">
	<header
		flex="~ row"
		w="full"
		items="start"
		justify="center"
		bg="black"
		text="white"
		p="6"
		gap="4"
	>
		<div flex="~ col" gap="4" items="center">
			<h1 text="3xl" font="bold">Napchat</h1>

			<input
				type="text"
				placeholder="Search Chats"
				bg="transparent"
				border="2 white rounded-lg"
				p="x-4 y-2"
				w="full"
				class="placeholder:text-gray-400 min-w-96 max-w-120"
				bind:value={chatSearchTerm}
			/>
		</div>
	</header>

	<section flex="~ col" w="full" gap="4" class="max-w-6xl">
		<div flex="~ col" gap="2">
			<p text="muted-foreground lg" font="400">Group Chats -- {filteredChats.length} Total</p>
		</div>

		<Table data={filteredChats} columns={chatsTableColumns} class="bg-dark/10" />
	</section>
</div>
