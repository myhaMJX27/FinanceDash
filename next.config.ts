import path from 'path';

import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  reactStrictMode: true,
  productionBrowserSourceMaps: true,
  compiler: {
    styledComponents: true,
    removeConsole: process.env.NODE_ENV === 'production',
  },
  webpack: (config, { isServer }) => {
    const aliases = {
      '@': path.resolve(__dirname, 'src'),
      '@entities': path.resolve(__dirname, 'src/entities'),
      '@features': path.resolve(__dirname, 'src/features'),
      '@store': path.resolve(__dirname, 'src/store'),
      '@widgets': path.resolve(__dirname, 'src/widgets'),
      '@shared': path.resolve(__dirname, 'src/shared'),
      '@models': path.resolve(__dirname, 'src/shared/models'),
    };

    config.resolve.alias = {
      ...config.resolve.alias,
      ...aliases,
    };

    if (!isServer) {
      config.resolve.fallback = { fs: false, path: false };
    }

    return config;
  },
};

export default nextConfig;
