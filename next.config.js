/** @type {import('next').NextConfig} */
const repoBase = process.env.PAGES_BASE || '/Limitless-grit'

const nextConfig = {
  output: 'export',
  assetPrefix: `${repoBase}/`,
  basePath: repoBase,
  trailingSlash: true,
  images: {
    unoptimized: true
  },
  env: {
    NEXT_PUBLIC_BASE_PATH: repoBase
  }
};

module.exports = nextConfig;
