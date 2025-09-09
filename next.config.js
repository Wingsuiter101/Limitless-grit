/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['cdn.sanity.io'],
  },
  // Note: transpilePackages removed (loader no longer uses three directly on client)
}

module.exports = nextConfig
