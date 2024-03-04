/** @type {import('next').NextConfig} */
const nextConfig = {
  basePath: "/profile2",
  output: "export", // <=== enables static exports
  reactStrictMode: true,
  outputDir: "out",
};

export default nextConfig;
