<script>
	import { POSITION } from '$lib/consts';

	export let position = POSITION.LEFT;
	export let dividing = true;
	export let disablePaddingBlock = false;
	export let disablePaddingInline = false;
</script>

<aside
	class:dividing
	class:top={position === POSITION.TOP}
	class:bottom={position === POSITION.BOTTOM}
	class:left={position === POSITION.LEFT}
	class:right={position === POSITION.RIGHT}
	class:disable-padding-block={disablePaddingBlock}
	class:disable-padding-inline={disablePaddingInline}
>
	<slot />
</aside>

<style lang="scss">
	aside {
		width: 250px;
		height: 100%;
		padding: var(--content-padding);
		&.left {
			grid-area: left-sidebar;
		}
		&.right {
			grid-area: right-sidebar;
		}
		&.disable-padding-block {
			padding-block: 0;
		}
		&.disable-padding-inline {
			padding-inline: 0;
		}
		&.dividing {
			&.top {
				border-bottom: 1px solid var(--clr-border-secondary);
			}
			&.bottom {
				border-top: 1px solid var(--clr-border-secondary);
			}
			&.left {
				border-right: 1px solid var(--clr-border-secondary);
			}
			&.right {
				border-left: 1px solid var(--clr-border-secondary);
			}
		}
	}
</style>
