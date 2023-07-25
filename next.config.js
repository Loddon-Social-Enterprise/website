/** @type {import('next').NextConfig} */
module.exports = () => {
  return {
    images: {
      loader: 'custom',
      loaderFile: 'lib/contentful-images.loader.js',
      remotePatterns: [
        {
          protocol: 'https',
          hostname: 'images.ctfassets.net',
          port: '',
          pathname: '/msvlzsu3dojq/**',
        },
      ],
    },
    reactStrictMode: true,
    poweredByHeader: false,
    experimental: {
      appDir: true
    },
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
};
