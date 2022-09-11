/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === 'production';

module.exports = {
  images: {
    loader: 'akamai',
    path: '.',
  },
  reactStrictMode: true,
  poweredByHeader: false
};
