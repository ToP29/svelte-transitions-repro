<script>
	import { MainNav } from '$components/Layout';
	import { LAYOUT_TYPE } from '$lib/consts';
	import { fadeIn, fadeOut } from '$animations/pageFade';

	export let type = LAYOUT_TYPE.DEFAULT;

	let layout = null;
</script>

<div class="layout {type}" bind:this={layout} in:fadeIn out:fadeOut>
	<MainNav />

	<slot />
</div>

<style lang="scss">
	.layout {
		position: relative;
		margin: 0;
		height: 100%;
		width: 100vw;
		overflow: hidden;
		padding: env(safe-area-inset-top) env(safe-area-inset-right) env(safe-area-inset-bottom)
			env(safe-area-inset-left);
		display: grid;
		grid-template:
			'main-nav main-nav main-nav' auto
			'left-sidebar header right-sidebar' auto
			'left-sidebar breadcrumbs right-sidebar' auto
			'left-sidebar tabs right-sidebar' auto
			'left-sidebar main right-sidebar' 1fr
			'left-sidebar footer right-sidebar' auto
			/ auto 1fr;
		&.DEFAULT {
			--content-padding: 1.75em 1.15em;
		}
	}
</style>
