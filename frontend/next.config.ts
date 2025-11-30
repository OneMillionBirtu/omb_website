import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "example.com",
        port: "", // optional
        pathname: "/**", // allows all paths
      },
      {
        protocol: "https",
        hostname: "anotherdomain.com",
        port: "",
        pathname: "/images/**", // optional: limit to a folder
      },
    ],
  },
};

export default nextConfig;
