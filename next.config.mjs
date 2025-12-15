/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export", // <=== enables static exports for GitHub Pages
  reactStrictMode: true,
  images: {
    unoptimized: true, // Required for static export
  },
};

export default nextConfig;
