<script lang="ts">
	import { Button } from '$components/ui/button';
	import { Textarea } from '$components/ui/textarea';
	import type { PageData } from './$types';

	export let data: PageData;
	const { logoutUrl, sessions } = data;
	console.log(sessions);
</script>

<section class="flex flex-col items-center justify-center h-screen">
	<Button variant="outline" href={logoutUrl}>Logout</Button>
	<Textarea class="h-96" value={JSON.stringify(sessions, null, 2)} />
</section>
