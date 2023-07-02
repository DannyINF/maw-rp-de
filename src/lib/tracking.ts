export const trackConnectionClick = () => {
	if (typeof window !== 'undefined' && window.plausible) {
		window.plausible('Connect to Server');
	}
};

export const trackForumClick = () => {
	if (typeof window !== 'undefined' && window.plausible) {
		window.plausible('Click on Forum');
	}
}

export const trackShopClick = () => {
	if (typeof window !== 'undefined' && window.plausible) {
		window.plausible('Click on Shop');
	}
}