<script lang="ts">
	import type { UiText } from '@ory/client';

	export let messages: UiText[] = [];
</script>

<div>
	{#each messages as message}
		{@const { text } = message}
		<div>{text}</div>
	{/each}
</div>
