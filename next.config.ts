import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: ['localhost'], // permite cargar imágenes desde localhost
  },
};

export default nextConfig;
