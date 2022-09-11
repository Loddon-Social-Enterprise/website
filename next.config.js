/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === 'production';

module.exports = {
  images: {
    loader: 'akamai',
    path: '.',
  },
  reactStrictMode: true,
  poweredByHeader: false,
  async redirects() {
    return [
      {
        source: '/our-services',
        destination: '/what-we-do',
        permanent: true,
      },
      {
        source: '/our-users',
        destination: '/our-service-users',
        permanent: true,
      },
      {
        source: '/ready-made-picture-frame-company-quote',
        destination: '/our-partners',
        permanent: true
      },
      {
        source: '/meet-the-team',
        destination: '/our-team',
        permanent: true,
      },
      {
        source: '/news-events',
        destination: '/',
        permanent: true,
      }
    ]
  },
};
