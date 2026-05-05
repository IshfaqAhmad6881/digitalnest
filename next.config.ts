import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Ensures file tracing stays within this project even if other lockfiles exist
  // elsewhere on the machine (Next.js can infer the wrong workspace root).
  outputFileTracingRoot: process.cwd(),

  // Allow running the dev server via http://127.0.0.1:3000 inside Codex/app browsers.
  // Without this, Next.js blocks some dev resources for safety (DNS rebinding protection).
  allowedDevOrigins: ["127.0.0.1"],
};

export default nextConfig;
