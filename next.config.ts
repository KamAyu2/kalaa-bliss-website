import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'scontent.cdninstagram.com',
        port: '',
        pathname: '/**',
      },
    ],
  },
};

export default nextConfig;
