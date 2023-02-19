<script>
	import Menu from '$components/Menu';
</script>

<nav>
	<Menu>
		<Menu.Item href="/">Home</Menu.Item>
		<Menu.Item href="/test">Test</Menu.Item>
		<Menu.Item href="/test/nest">TestNest</Menu.Item>
	</Menu>
</nav>

<style lang="scss">
	nav {
		grid-area: main-nav;
		border-bottom: 1px solid var(--clr-border-secondary);
	}
</style>
