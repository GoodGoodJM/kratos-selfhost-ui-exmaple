<script lang="ts">
	import { Button } from '$components/ui/button';
	import type { UiNode, UiNodeInputAttributes } from '@ory/client';
	import { getNodeLabel } from '@ory/integrations/ui';
	import type { HTMLButtonAttributes } from 'svelte/elements';
	import UiNodeMessages from './UiNodeMessages.svelte';

	export let node: UiNode;
	const { attributes, messages } = node;
	const label = getNodeLabel(node);
	const { name, type: _type, value, disabled } = attributes as UiNodeInputAttributes;
	const type = _type as HTMLButtonAttributes['type'];
</script>

<Button {name} {type} {value} {disabled}>
	{label}
</Button>
{#if messages && messages.length > 0}
	<div>
		<UiNodeMessages {messages} />
	</div>
{/if}
