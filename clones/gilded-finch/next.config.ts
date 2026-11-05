import path from "node:path";
import type { NextConfig } from "next";

// This app lives inside the template repository, which has its own lockfile.
// Pin the project root so Turbopack and output tracing stay inside this folder.
const projectRoot = path.resolve(__dirname);

const nextConfig: NextConfig = {
  output: "standalone",
  outputFileTracingRoot: projectRoot,
  turbopack: {
    root: projectRoot,
  },
  devIndicators: false,
};

export default nextConfig;
