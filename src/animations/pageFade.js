import { cubicIn, cubicOut } from 'svelte/easing';

export const duration = 2000;

export function fadeIn() {
	return {
		duration,
		delay: duration,
		easing: cubicOut,
		css: (t) => {
			return `
				opacity: ${t};
				transform: translate(0, ${(t - 1) * -30}px);
			`;
		}
	};
}
export function fadeOut() {
	return {
		duration,
		delay: 0,
		easing: cubicIn,
		css: (t) => {
			return `
				opacity: ${t};
				transform: translate(0, ${(t - 1) * -30}px);
			`;
		}
	};
}
