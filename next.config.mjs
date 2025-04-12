import 'dotenv/config'; // Giúp load biến môi trường từ .env

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: process.env.NODE_ENV === 'production' ? `/${process.env.REPO_NAME}` : '',
  assetPrefix: process.env.NODE_ENV === 'production' ? `/${process.env.REPO_NAME}/` : '',
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
