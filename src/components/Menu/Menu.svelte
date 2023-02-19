<script lang="ts">
	import { POSITION } from '$lib/consts';

	export let style = null;
	export let dividing = false;
	export let position = POSITION.TOP;
</script>

<div
	class="menu"
	{style}
	class:dividing
	class:top={position === POSITION.TOP}
	class:bottom={position === POSITION.BOTTOM}
	class:left={position === POSITION.LEFT}
	class:right={position === POSITION.RIGHT}
>
	<slot />
</div>

<style lang="scss">
	.menu {
		display: flex;
		align-items: center;
		&.top,
		&.bottom {
			justify-content: center;
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
