import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
    images: {
        domains: ['demo.dotcms.com'],
        // or use remotePatterns for more control (recommended):
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'demo.dotcms.com',
                port: '',
                pathname: '/dA/**',
            },
        ],
    },
};

export default nextConfig;
