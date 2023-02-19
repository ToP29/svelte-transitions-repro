import type { ComponentType } from 'svelte'

import _Layout from './Layout.svelte'
import Header from './LayoutHeader.svelte'
import Main from './LayoutMain.svelte'
import MainNav from './MainNav.svelte'
import Sidebar from './Sidebar.svelte'

interface LayoutType extends ComponentType<_Layout> {
	Header?: ComponentType<Header>
	Main?: ComponentType<Main>
	MainNav?: ComponentType<MainNav>
	Sidebar?: ComponentType<Sidebar>
}

const Layout: LayoutType = _Layout
Layout.Header = Header
Layout.Main = Main
Layout.MainNav = MainNav
Layout.Sidebar = Sidebar

export default Layout

export { Header, Main, MainNav, Sidebar }
