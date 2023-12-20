/** @type {import('next').NextConfig} */
const nextConfig = {
    output: "export",
    images: {
        remotePatterns: [
            {
                protocol: "https",
                hostname: "unirep.pages.dev",
            },
        ],
    },
};

module.exports = nextConfig;
