<script lang="ts">
	import { Button } from '$components/ui/button';
	import type { UiNode, UiNodeAnchorAttributes } from '@ory/client';
	import UiNodeMessages from './input/UiNodeMessages.svelte';

	export let node: UiNode;

	const { attributes, messages } = node;
	const {
		title: { text },
		href
	} = attributes as UiNodeAnchorAttributes;
</script>

<Button variant="outline" {href}>{text}</Button>
<UiNodeMessages {messages} />
