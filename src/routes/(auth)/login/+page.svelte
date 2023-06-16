<script lang="ts">
	import { Button } from '$components/ui/button';
	import type { PageData } from './$types';

	export let data: PageData;
	const { registartionUrl } = data;
</script>

<Button variant="outline" href={registartionUrl}>Sign up</Button>
