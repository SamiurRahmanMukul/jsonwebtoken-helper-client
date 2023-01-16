/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  publicRuntimeConfig: {
    // will be available on both server and client
    APP_BASE_URL: process.env.APP_BASE_URL
  }
};

module.exports = nextConfig;
