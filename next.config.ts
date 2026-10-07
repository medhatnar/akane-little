import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'i.postimg.cc',
        pathname: '/**', // Matches all paths from this domain
      },
    ],
  },
};

export default nextConfig;

