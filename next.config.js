/** @type {import('next').NextConfig} */
const repoBase = process.env.PAGES_BASE || '/Limitless-grit'

const nextConfig = {
  output: 'export',
  assetPrefix: `${repoBase}/`,
  basePath: repoBase,
  images: {
    unoptimized: true
  }
};

module.exports = nextConfig;
