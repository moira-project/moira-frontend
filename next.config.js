/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	swcMinify: true,
	env: {
		API_URL: 'http://localhost:8080',
		KAKAO_AUTH_REST_API_KEY: '7acb4bfc12bf9d810137409f749daa4d',
		KAKAO_AUTH_REDIRECT_URI: 'http://localhost:8080/login/oauth2/kakao',
	},
};

module.exports = nextConfig;
