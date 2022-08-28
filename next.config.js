/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === 'production';

module.exports = {
  images: {
    loader: 'akamai',
    path: '.',
  },
  assetPrefix: isProd ? './' : '.',
  basePath: isProd ? '/website' : '',
  reactStrictMode: true
};
