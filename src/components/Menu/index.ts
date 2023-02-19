import type { ComponentType } from 'svelte'

import _Menu from './Menu.svelte'
import Item from './MenuItem.svelte'

interface MenuType extends ComponentType {
	Item?: ComponentType
}

const Menu: MenuType = _Menu

Menu.Item = Item

export default Menu

export { Item }
