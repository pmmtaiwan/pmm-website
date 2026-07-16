import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    formats: ["image/avif", "image/webp"]
  },
  async redirects() {
    return [
      { source: "/en/manifesto", destination: "/manifesto", permanent: false },
      { source: "/en/convictions", destination: "/convictions", permanent: false },
      { source: "/en/our-story", destination: "/our-story", permanent: false }
    ];
  }
};

export default nextConfig;
