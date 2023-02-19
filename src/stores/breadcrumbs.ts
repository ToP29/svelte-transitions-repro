import { writable } from 'svelte/store';

import type { Crumb } from '../types/breadcrumbs';

function deleteItemWithKey(arr, key, value) {
	return arr.filter((obj) => obj[key] !== value);
}

class BreadcrumbsStore {
	public store = writable([]);

	addLevel = (crumb: Crumb) => {
		this.store.update((oldBreadcrumbs) => [...oldBreadcrumbs, crumb]);
	};

	removeLevel = (id: string) => {
		this.store.update((oldBreadcrumbs) => deleteItemWithKey(oldBreadcrumbs, 'id', id));
	};
}

export default new BreadcrumbsStore();
