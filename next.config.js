/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['placehold.co', 'picsum.photos'],
  },
  // Ensure CSS modules are handled correctly
  webpack: (config) => {
    config.module.rules.push({
      test: /\.css$/,
      use: ['style-loader', 'css-loader', 'postcss-loader'],
    });
    return config;
  },
  // Optimize CSS for production
  optimizeFonts: true,
  swcMinify: true,
}

module.exports = nextConfig 