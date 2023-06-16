<script lang="ts">
	import type { UiNode, UiNodeInputAttributes } from '@ory/client';

	export let node: UiNode;
	const { attributes } = node;
	const { name, value } = attributes as UiNodeInputAttributes;
</script>

<input type="hidden" {name} {value} />
