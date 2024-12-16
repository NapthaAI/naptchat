<script lang="ts">
	import { Button } from "$common/ui/components";
	import type { Chat } from "../model/schemas";

	const { id, topic }: Pick<Chat, "id" | "topic"> = $props();
</script>

<Button href={`/chats/${id}`} class="border-none h-fit py-2">{topic}</Button>
