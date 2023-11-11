/** @type {import('next').NextConfig} */
const nextConfig = {
	images: {
		remotePatterns: [
			{
				hostname: "upload.wikimedia.org",
				protocol: "https",
			},
			{
				hostname: "geekole.com",
				protocol: "https",
			},
		],
	},
};

module.exports = nextConfig;
