<script>
	import { isEmpty } from 'lodash-es';

	import Breadcrumbs from '$components/Breadcrumbs';
	import { breadcrumbs } from '$stores';

	import { page } from '$app/stores';

	export let title = null;
	export let hideTitle = false;
	export let hideBreadcrumbs = false;

	let breadcrumbsStore = breadcrumbs.store;
	$: activeCrumb = $breadcrumbsStore.find((crumb) => crumb.routeId === $page.route.id);
	$: _title = title || activeCrumb?.label;
</script>

<header>
	{#if !hideTitle && !isEmpty(_title)}
		<h1>{_title}</h1>
	{/if}{#if !hideBreadcrumbs}
		<div class="breadcrumbs-container">
			<Breadcrumbs />
		</div>
	{/if}
</header>

<style lang="scss">
	header {
		width: 100%;
		position: relative;
		margin: 0 auto;
		box-sizing: border-box;
		overflow: auto;
		grid-area: header;
		padding: var(--content-padding);
		padding-block: 0;

		&:not(:empty) {
			padding-block: 1rem;
			border-bottom: 1px solid var(--clr-border-secondary);
		}
		h1 {
			font-weight: 600;
			margin: 0;
			line-height: 1em;
			overflow: visible;
		}
		.breadcrumbs-container {
			margin-top: 0.8rem;
		}
	}
</style>
