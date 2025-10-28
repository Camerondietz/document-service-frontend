import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  experimental: {
    serverActions: {
      bodySizeLimit: '10mb', // or '20mb', depending on your PDFs
    },
  },
};

export default nextConfig;
