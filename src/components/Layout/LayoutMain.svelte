<script>
	export let disablePaddingBlock = false
	export let disablePaddingInline = false
</script>

<main
	class:disable-padding-block={disablePaddingBlock}
	class:disable-padding-inline={disablePaddingInline}
>
	<slot />
</main>

<style lang="scss">
	main {
		width: 100%;
		position: relative;
		margin: 0 auto;
		box-sizing: border-box;
		overflow: auto;
		grid-area: main;
		padding: var(--content-padding);

		&.disable-padding-block {
			padding-block: 0;
		}
		&.disable-padding-inline {
			padding-inline: 0;
		}
	}
</style>
