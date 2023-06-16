<script lang="ts">
	import { Input } from '$components/ui/input';
	import { Label } from '$components/ui/label';
	import type { UiNode, UiNodeInputAttributes } from '@ory/client';
	import { getNodeLabel } from '@ory/integrations/ui';

	export let node: UiNode;
	const { messages, attributes } = node;
	const label = getNodeLabel(node);
	const { name, type, value, disabled, required } = attributes as UiNodeInputAttributes;
	const message = messages && messages.length > 0 ? messages.at(0) : null;
</script>

<fieldset>
	<div>
		<Label for={name}>
			{label}
			{#if required}
				<span>*</span>
			{/if}
		</Label>
		<Input id={name} placeholder={label} {name} {type} {value} {disabled} />
	</div>
	{#if message}
		{@const { text } = message}
		<p class="text-sm text-muted-foreground">{text}</p>
	{/if}
</fieldset>
