/** @type {import('next').NextConfig} */
const nextConfig = {
  
    async redirects() {
      return [
        {
          source: '/apps/cr',
          destination: '/apps/code-review',
          permanent: true,
        },
      ]
    },
  
  }
  
  module.exports = nextConfig