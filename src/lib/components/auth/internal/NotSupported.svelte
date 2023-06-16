<script lang="ts">
	import type { UiNode } from '@ory/client';

	export let node: UiNode;
	console.log(node);
</script>

<div>
	<span> Not supported </span>
	{@html JSON.stringify(node)}
</div>
