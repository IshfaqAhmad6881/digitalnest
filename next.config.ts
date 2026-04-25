import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Ensures file tracing stays within this project even if other lockfiles exist
  // elsewhere on the machine (Next.js can infer the wrong workspace root).
  outputFileTracingRoot: process.cwd(),
};

export default nextConfig;
