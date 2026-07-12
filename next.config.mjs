/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**', // Allows all domains
      },
      {
        protocol: 'http',
        hostname: '**', // Also allows unsecured HTTP links if needed
      },
    ],
  },
};

export default nextConfig;