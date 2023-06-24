/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      "gateway.marvel.com",
      "images.unsplash.com",
      "i.annihil.us",
      "github.com",
    ],
  },
};

module.exports = nextConfig;
