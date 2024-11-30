/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: { appDir: true, typedRoutes: true},
  webpack(config) {
      config.experiments = { ...config.experiments, topLevelAwait: true };
      return config;
  },
  images: {
    domains: ['images.pexels.com','172.17.84.65','4.144.33.203','172.17.84.49'],
  },
}

module.exports = nextConfig
