<script lang="ts" generics="Item">
	import type { Snippet } from "svelte";
	import Button from "./button.svelte";

	type Column = {
		key: string;
		label: string;
	};

	type SortDirection = "asc" | "desc";

	let {
		data,
		columns,
		initialSortKey = "id",
		initialSortDirection = "asc" as SortDirection,
		class: customClass,
		cell,
	} = $props<{
		data: Item[];
		columns: Column[];
		initialSortKey?: string;
		initialSortDirection?: SortDirection;
		class?: string;
		cell?: Snippet<[{ item: Item; key: keyof Item }]>;
	}>();

	// Sorting state
	let sortKey = $state(initialSortKey);
	let sortDirection = $state<SortDirection>(initialSortDirection);

	// Computed sorted data
	let sortedItems = $derived(
		[...data].sort((a, b) => {
			const aValue = a[sortKey];
			const bValue = b[sortKey];

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

<div overflow="x-auto" rounded="lg" border="border" pb="4" class={customClass}>
	<table w="full">
		<thead>
			<tr>
				{#each columns as column}
					<th
						p="x-4 y-3"
						bg="secondary"
						text="left muted-foreground sm"
						border="b border"
						font="medium"
					>
						<Button
							borderless
							onClick={() => handleSort(column.key)}
							class="bg-secondary text-primary-foreground hover:bg-dark/95"
						>
							{column.label}

							{#if sortKey === column.key}
								<span text="foreground">
									{sortDirection === "asc" ? "↑" : "↓"}
								</span>
							{/if}
						</Button>
					</th>
				{/each}
			</tr>
		</thead>

		<tbody>
			{#each sortedItems as item (item.id)}
				<tr bg="hover:muted/50" transition="colors">
					{#each columns as column}
						<td p="x-9 y-3" border="b border">
							{#if cell}
								{@render cell({ item, key: column.key })}
							{:else}
								{item[column.key]}
							{/if}
						</td>
					{/each}
				</tr>
			{/each}
		</tbody>
	</table>
</div>
