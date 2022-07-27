/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	swcMinify: true,
	async redirects() {
		return [
			{
				source: '/oauth2/kakao/:path*',
				destination: '/',
				permanent: false,
			},
		];
	},
};

module.exports = nextConfig;
