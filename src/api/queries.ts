import { request } from './client';

export const getHomepage = async (variables = null) => {
  const query = `query($preview: Boolean){
    homepageCollection(preview: $preview) {
      items {
        pageTitle
        mainContentBody {
          json
        }
        calloutQuote {
          json
        }
      }
    }
  }`;

  const data = await request({
    query,
    variables: {}
  });

  return data.homepageCollection.items[0];
};

export const getGenericPage = async (slug: string, variables = null) => {
  const query = `query($preview: Boolean){
    pageCollection(
      where: {
        slug: "${slug}"
      }
      preview: $preview
    ) {
      items {
        pageTitle
        body {
          json
        }
      }
    }
  }`;

  const data = await request({
    query,
    variables: {}
  });

  return data.pageCollection.items[0];
};
