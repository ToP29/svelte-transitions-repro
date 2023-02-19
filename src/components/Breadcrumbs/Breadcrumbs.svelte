<script lang="ts">
	import { breadcrumbs } from '$stores';

	import { page } from '$app/stores';

	import Icon from '$components/Icon.svelte';

	const breadcrumbsStore = breadcrumbs.store;
</script>

<div class="breadcrumbs">
	{#each $breadcrumbsStore as crumb, i}
		<a href={crumb.href} class:active={$page.route.id === crumb.routeId}>
			{#if crumb.icon}
				<Icon icon="tabler:{crumb.icon}" size="20" />
			{:else if crumb.label}
				{crumb.label}
			{/if}
		</a>
		{#if i < $breadcrumbsStore.length - 1}
			<div class="separator">
				<Icon icon="tabler:chevron-right" size="18" />
			</div>
		{/if}
	{/each}
</div>

<style lang="scss">
	.breadcrumbs {
		display: flex;
		flex-direction: row;
		align-items: center;
		a {
			display: flex;
			&.active {
				font-weight: 600;
				--clr-link: var(--clr-text-primary);
				--clr-link-hover: var(--clr-text-primary);
				pointer-events: none;
			}
			&:not(.active) {
				--clr-link: var(--clr-text-secondary);
				--clr-link-hover: var(--clr-text-primary);
			}
		}
		.separator {
			display: flex;
			margin-inline: 2px;
			color: var(--clr-contrast-400);
		}
	}
</style>
