import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Output as standalone for Dreamhost deployment
  output: 'standalone',

  // Optimize for production
  poweredByHeader: false,

  // Image optimization settings
  images: {
    unoptimized: false, // Enable optimization
  },

  // External packages for server components
  serverExternalPackages: ['@prisma/client', 'mysql2'],
};

export default nextConfig;
