# Loddon Social Enterprise Website

[![Netlify Status](https://api.netlify.com/api/v1/badges/9e4bad17-ffa1-462f-a133-77a5787f5bc0/deploy-status)](https://app.netlify.com/sites/loddon/deploys)

This is the website for Loddon Social Enterprise, a Basingstoke based charity for adults with learning difficulties.

It has been built as a static site on top of NextJS, with content managed in Contentful, and hosting on Netlify.

The core focus was to replace the former paid hosted Wordpress website with a website that could run completely free of charge. Beyond this the main aims are accessibility, simplicity, and speed.

## Production Builds

Building the app for production is handled by the default Netlify Github integration.

A new build of the app will be triggered when `main` is updated in the Github repo.

Builds will also be triggered from Contentful, via a webhook, whenever a piece of content is published or unpublished.

## Developing

This project uses `npm` for dependency management.

To get started with a development build, clone the repo and run;

```
$ npm i
```

The content for the pages is built from the Contentful GraphQL API. In order to query the API, you'll need to add access tokens to a `.env.local` file in the root directory.

```yaml
CONTENTFUL_SPACE_ID=
CONTENTFUL_ACCESS_TOKEN=
NEXT_PUBLIC_CONTENTFUL_PREVIEW_ACCESS_TOKEN=
CONTENTFUL_ENVIRONMENT=
```

Once you've added your env files with the correct values, you can get a development server running with

```
$ npm run dev
```
