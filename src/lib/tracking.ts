export const trackConnectionClick = () => {
	if (typeof window !== 'undefined' && window.plausible) {
		window.plausible('Connect to Server');
		gtag('event', 'conversion', {
			send_to: 'AW-11244277110/M8LbCN6tlLYYEPaa2PEp',
		});
	}
};

export const trackForumClick = () => {
	if (typeof window !== 'undefined' && window.plausible) {
		window.plausible('Click on Forum');
	}
};

export const trackShopClick = () => {
	if (typeof window !== 'undefined' && window.plausible) {
		window.plausible('Click on Shop');
	}
};
