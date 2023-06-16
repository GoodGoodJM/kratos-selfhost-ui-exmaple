<script lang="ts">
	import { page } from '$app/stores';
	import UINode from '$components/auth/UINode.svelte';
	import UiNodeMessages from '$components/auth/internal/input/UiNodeMessages.svelte';
	import { Card, CardContent, CardTitle } from '$components/ui/card';
	import CardHeader from '$components/ui/card/CardHeader.svelte';

	const { ui } = $page.data;
	const { nodes, messages, action, method } = ui;
	console.log($page.data);
</script>

<section class="flex flex-col items-center justify-center h-screen">
	<Card class="w-[380px]">
		<CardHeader>
			<span class="text-center">
				<CardTitle>IMG!</CardTitle>
			</span>
		</CardHeader>
		<CardContent>
			<form id="login_form" {action} {method} class="flex flex-col gap-4">
				{#if messages}
					<UiNodeMessages {messages} />
				{/if}
				{#each nodes as node}
					<UINode {node} />
				{/each}
				<slot />
			</form>
		</CardContent>
	</Card>
</section>
