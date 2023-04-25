export const trackConnectionClick = () => {
	if (typeof window !== 'undefined' && window.plausible) {
		window.plausible('Connect to Server');
	}
};
