import NotSupported from '$components/auth/internal/NotSupported.svelte';
import UiNodeAnchor from '$components/auth/internal/UiNodeAnchor.svelte';
import UIinputDefault from '$components/auth/internal/input/UIinputDefault.svelte';
import UiInputButton from '$components/auth/internal/input/UiInputButton.svelte';
import UiInputHidden from '$components/auth/internal/input/UiInputHidden.svelte';
import type { UiNode } from '@ory/client';
import { isUiNodeAnchorAttributes, isUiNodeInputAttributes } from '@ory/integrations/ui';

function checkIsSocialButton(node: UiNode) {
	if (!isUiNodeInputAttributes(node.attributes)) return false;
	return (
		(node.attributes.name === 'provider' || node.attributes.name === 'link') &&
		node.group === 'oidc'
	);
}

export function resolveNodeComponent(node: UiNode) {
	const { attributes } = node;
	if (isUiNodeInputAttributes(attributes)) {
		const { type } = attributes;
		if (type === 'hidden') {
			return UiInputHidden;
		}
		if (type === 'submit') {
			if (checkIsSocialButton(node)) return NotSupported;
			return UiInputButton;
		}
		return UIinputDefault;
	} else if (isUiNodeAnchorAttributes(attributes)) {
		return UiNodeAnchor;
	} else {
		return NotSupported;
	}
}
