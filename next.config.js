/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === 'production';

module.exports = {
  images: {
    domains: ['https://loddon-social-enterprise.github.io/'],
    loader: 'akamai',
    path: '',
  },
  assetPrefix: isProd ? '/website/' : '',
  reactStrictMode: true
};
