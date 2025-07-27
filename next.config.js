/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['firebasestorage.googleapis.com', 'res.cloudinary.com'],
    formats: ['image/webp', 'image/avif'],
  },
};

module.exports = nextConfig; 