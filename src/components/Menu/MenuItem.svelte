<script lang="ts">
	import Icon from '$components/Icon.svelte';

	export let href = null;
	export let label = null;
	export let icon = null;
</script>

<a {href} on:click>
	{#if icon}
		<div class="icon-container">
			<Icon {icon} size="18" />
		</div>
	{/if}
	<span class="label">
		{#if $$slots.default}
			<slot />
		{:else}
			{label}
		{/if}
	</span>
</a>

<style lang="scss">
	a {
		--clr-link: var(--clr-text-primary);
		--clr-link-hover: var(--clr-primary-900);
		padding: 0.8em 2em;
		text-decoration: none;
		display: inline-flex;
		align-items: center;
		justify-content: center;
		font-weight: 500;
		font-size: var(--text-md);
		transition: color 250ms;
	}
	.icon-container {
		margin-right: 0.8em;
		display: flex;
		align-items: center;
	}
</style>
