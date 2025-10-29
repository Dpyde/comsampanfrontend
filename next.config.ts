import type { NextConfig } from "next";
import path from "path";

// Ensure Turbopack only scans the project directory.
// This avoids macOS permission errors when Turbopack attempts to read
// parent directories like ~/Documents which can be blocked by privacy settings.
const nextConfig: any = {
  turbopack: {
    root: path.resolve(__dirname),
  },
};

export default nextConfig;
