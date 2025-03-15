import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  basePath: process.env.NODE_ENV === 'production' ? '/contentility-website' : '',
  assetPrefix: process.env.NODE_ENV === 'production' ? '/contentility-website/' : '',
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
