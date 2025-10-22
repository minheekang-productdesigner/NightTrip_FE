import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  reactStrictMode: true,

  // 빌드 시 정적 생성 타임아웃 완화 (기본 60s → 120s)
  staticPageGenerationTimeout: 120,

  images: {
    remotePatterns: [
      { protocol: 'https', hostname: 'images.unsplash.com', port: '', pathname: '/**' },
      { protocol: 'https', hostname: 'www.urbanbrush.net', port: '', pathname: '/**' },
      { protocol: 'https', hostname: 'kr.object.ncloudstorage.com', port: '', pathname: '/**' }
    ]
  },

  turbopack: {
    rules: {
      '*.svg': {
        loaders: ['@svgr/webpack'],
        as: '*.ts'
      }
    }
  },

  // (빌드 시 사용)
  webpack: (config) => {
    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack']
    });
    return config;
  }
};

export default nextConfig;
