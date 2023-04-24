/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	i18n: {
		locales: ['de'],
		defaultLocale: 'de',
	},
	publicRuntimeConfig: {
		NEXT_LOGIN_ENABLED: process.env.NEXT_LOGIN_ENABLED,
	},
};

module.exports = nextConfig;
