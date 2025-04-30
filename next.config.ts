import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'standalone',
  images: {
    unoptimized: true,
  },
  typescript: {
    // Dangerously allow production builds to successfully complete even with type errors
    ignoreBuildErrors: true,
  },
  eslint: {
    // Warning: This allows production builds to successfully complete even if
    // your project has ESLint errors.
    ignoreDuringBuilds: true,
  },
  // For Netlify environment
  trailingSlash: false,
  experimental: {
    serverExternalPackages: ['mongodb', 'bcryptjs', 'nodemailer', 'razorpay'],
  }
};

export default nextConfig;
