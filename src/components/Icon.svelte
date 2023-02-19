<script lang="ts">
	import Icon from '@iconify/svelte';

	export let size = '1.15em';
	export let width = size;
	export let height = size;
</script>

<Icon {...$$restProps} {width} {height} />
