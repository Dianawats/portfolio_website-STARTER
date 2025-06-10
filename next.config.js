/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // Enables static HTML export
  reactStrictMode: true, // Helps catch potential issues
  compiler: {
    styledComponents: true, // Enables styled-components support with SWC
  },
};

module.exports = nextConfig;
