/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["yt3.ggpht.com", "i.ytimg.com"],
    deviceSizes: [320, 768, 1024],
  },
  compiler: {
    styledComponents: true,
  },
};

module.exports = nextConfig;
