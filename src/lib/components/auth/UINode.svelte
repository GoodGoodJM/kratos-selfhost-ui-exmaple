<script lang="ts">
	import type { UiNode } from '@ory/client';
	import { resolveNodeComponent } from './utils';

	export let node: UiNode;
	const component = resolveNodeComponent(node);
</script>

<svelte:component this={component} {node} />
