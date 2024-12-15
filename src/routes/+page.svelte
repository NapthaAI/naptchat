<script lang="ts">
	import { createSvelteTable } from "$lib/common/ui/components/data-table/data-table.svelte";
	import FlexRender from "$lib/common/ui/components/data-table/flex-render.svelte";
	import { Button } from "$lib/common/ui/components/button";
	import { Input } from "$lib/common/ui/components/input";
	import {
		Table,
		TableBody,
		TableCell,
		TableHead,
		TableHeader,
		TableRow,
	} from "$lib/common/ui/components/table";
	import {
		getCoreRowModel,
		getSortedRowModel,
		getFilteredRowModel,
		type SortingState,
	} from "@tanstack/table-core";
	import type { Topic } from "$lib/entities/topic/types";

	const data: Topic[] = [
		{ initialTopic: "Initial Topic ABC", groupSize: 25, maxRounds: 8, subRounds: 3 },
		{ initialTopic: "Initial Topic DEF", groupSize: 39, maxRounds: 12, subRounds: 4 },
		{ initialTopic: "Initial Topic GHI", groupSize: 47, maxRounds: 5, subRounds: 9 },
		{ initialTopic: "Initial Topic JKL", groupSize: 18, maxRounds: 30, subRounds: 15 },
		{ initialTopic: "Initial Topic MNO", groupSize: 6, maxRounds: 44, subRounds: 20 },
		{ initialTopic: "Initial Topic PQR", groupSize: 111, maxRounds: 23, subRounds: 52 },
	];

	let searchQuery = $state("");
	let sorting = $state<SortingState>([]);

	const table = createSvelteTable({
		data,
		columns: [
			{
				accessorKey: "initialTopic",
				header: "Initial Topic",
				enableSorting: true,
			},
			{
				accessorKey: "groupSize",
				header: (context) => {
					const column = context.column;
					const sortDir = column.getIsSorted();
					return `Group Size ${sortDir === "asc" ? "↑" : sortDir === "desc" ? "↓" : "↕"}`;
				},
				enableSorting: true,
			},
			{
				accessorKey: "maxRounds",
				header: (context) => {
					const column = context.column;
					const sortDir = column.getIsSorted();
					return `Max Rounds ${sortDir === "asc" ? "↑" : sortDir === "desc" ? "↓" : "↕"}`;
				},
				enableSorting: true,
			},
			{
				accessorKey: "subRounds",
				header: (context) => {
					const column = context.column;
					const sortDir = column.getIsSorted();
					return `Sub Rounds ${sortDir === "asc" ? "↑" : sortDir === "desc" ? "↓" : "↕"}`;
				},
				enableSorting: true,
			},
		],
		getCoreRowModel: getCoreRowModel(),
		getSortedRowModel: getSortedRowModel(),
		getFilteredRowModel: getFilteredRowModel(),
		state: () => ({
			sorting,
			globalFilter: searchQuery,
		}),
		onSortingChange: (updater) => {
			sorting = typeof updater === "function" ? updater(sorting) : updater;
		},
		onGlobalFilterChange: (value) => {
			searchQuery = value;
		},
		globalFilterFn: (row, columnId, filterValue) => {
			const value = row.getValue(columnId);
			return String(value).toLowerCase().includes(String(filterValue).toLowerCase());
		},
	});
</script>

<div class="container mx-auto p-6">
	<div class="flex justify-between items-center mb-6">
		<div>
			<h1 class="text-2xl font-bold mb-2">Discover</h1>
			<p class="text-muted-foreground">Group Chats -- {data.length} Total</p>
		</div>
		<div class="flex gap-4">
			<Button variant="outline" class="border-white text-white hover:bg-white/10">Create</Button>
			<Button variant="outline" class="border-white text-white hover:bg-white/10">Sign Up</Button>
		</div>
	</div>

	<div class="mb-6">
		<Input
			type="text"
			placeholder="Search Topics"
			bind:value={searchQuery}
			class="bg-black text-white placeholder:text-gray-400 border-white/20"
		/>
	</div>

	<div class="rounded-md border border-white/20">
		<Table>
			<TableHeader>
				{#each table.getHeaderGroups() as headerGroup}
					<TableRow>
						{#each headerGroup.headers as header}
							<TableHead class="border-b border-white/20">
								{#if header.column.getCanSort()}
									<button
										class="w-full text-left font-medium text-white hover:text-white/80 transition-colors"
										onclick={() => header.column.toggleSorting()}
									>
										<FlexRender
											content={header.column.columnDef.header}
											context={header.getContext()}
										/>
									</button>
								{:else}
									<div class="w-full text-left font-medium text-white">
										<FlexRender
											content={header.column.columnDef.header}
											context={header.getContext()}
										/>
									</div>
								{/if}
							</TableHead>
						{/each}
					</TableRow>
				{/each}
			</TableHeader>
			<TableBody>
				{#each table.getRowModel().rows as row}
					<TableRow class="hover:bg-white/5">
						{#each row.getVisibleCells() as cell}
							<TableCell class="border-b border-white/20 text-white">
								<FlexRender content={cell.column.columnDef.cell} context={cell.getContext()} />
							</TableCell>
						{/each}
					</TableRow>
				{/each}
			</TableBody>
		</Table>
	</div>
</div>
