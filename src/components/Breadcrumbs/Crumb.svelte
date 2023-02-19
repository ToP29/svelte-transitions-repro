<script lang="ts">
	import { onDestroy, onMount } from 'svelte';
	import { v4 as uuid } from 'uuid';

	import { breadcrumbs } from '$stores';

	export let id: string;
	export let label: string;
	export let icon: string;
	export let href: string;
	export let routeId: string;

	if (!id) id = uuid();

	onMount(() => {
		breadcrumbs.addLevel({ id, label, icon, href, routeId });
	});
	onDestroy(() => {
		breadcrumbs.removeLevel(id);
	});
</script>
