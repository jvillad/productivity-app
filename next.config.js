/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  serverComponentsExternalPackages: ['brcypt'],
};

module.exports = nextConfig;
