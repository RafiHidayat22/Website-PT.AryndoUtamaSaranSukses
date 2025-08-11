import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "ybspcnkqvtadqzviqtun.supabase.co", // domain Supabase kamu
        pathname: "/**", 
      },
    ],
  },
};

export default nextConfig;
