<script lang="ts">
	import { type Topic } from "$lib/entities/topic";
	import type { PageData } from "./$types";
	import { Button } from "bits-ui";
	import { cn } from "$lib/common/ui/utils";

	let { data }: { data: PageData } = $props();

	// Column definitions with display names and sort keys
	const columns = [
		{ key: "id", label: "ID" },
		{ key: "name", label: "Initial Topic" },
		{ key: "groupSize", label: "Group Size" },
		{ key: "maxRounds", label: "Max Rounds" },
		{ key: "subRounds", label: "Sub Rounds" },
	];

	// Sorting state
	let sortKey = $state("id");
	let sortDirection = $state<"asc" | "desc">("asc");

	// Computed sorted data
	let sortedTopics = $derived(
		[...data.topics].sort((a, b) => {
			const aValue = a[sortKey as keyof Topic];
			const bValue = b[sortKey as keyof Topic];

			if (typeof aValue === "string" && typeof bValue === "string") {
				return sortDirection === "asc"
					? aValue.localeCompare(bValue)
					: bValue.localeCompare(aValue);
			}

			return sortDirection === "asc"
				? Number(aValue) - Number(bValue)
				: Number(bValue) - Number(aValue);
		}),
	);

	// Handle sort
	function handleSort(key: string) {
		if (sortKey === key) {
			sortDirection = sortDirection === "asc" ? "desc" : "asc";
		} else {
			sortKey = key;
			sortDirection = "asc";
		}
	}
</script>

<div w="full" overflow="x-auto" rounded="lg" border="border">
	<table w="full">
		<thead>
			<tr>
				{#each columns as column}
					<th
						p="x-4 y-3"
						bg="muted"
						text="left muted-foreground sm"
						border="b border"
						font="medium"
					>
						<Button.Root
							on:click={() => handleSort(column.key)}
							class={cn(
								"inline-flex h-12 items-center justify-center rounded-lg",
								"px-5 text-lg font-semibold bg-primary text-primary-foreground",
								"hover:bg-dark/95 active:scale-98 active:transition-all",
							)}
						>
							{column.label}

							{#if sortKey === column.key}
								<span text="foreground">
									{sortDirection === "asc" ? "↑" : "↓"}
								</span>
							{/if}
						</Button.Root>
					</th>
				{/each}
			</tr>
		</thead>
		<tbody>
			{#each sortedTopics as topic (topic.id)}
				<tr bg="hover:muted/50" transition="colors">
					<td p="x-4 y-3" border="b border">{topic.id}</td>
					<td p="x-4 y-3" border="b border">{topic.name}</td>
					<td p="x-4 y-3" border="b border">{topic.groupSize}</td>
					<td p="x-4 y-3" border="b border">{topic.maxRounds}</td>
					<td p="x-4 y-3" border="b border">{topic.subRounds}</td>
				</tr>
			{/each}
		</tbody>
	</table>
</div>
