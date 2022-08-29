import { request } from './client';

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
        alertMessage {
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

export const getContactPage = async (variables = null) => {
  const query = `query($preview: Boolean){
    contactPageCollection(preview: $preview) {
      items {
        pageTitle
        contactBody {
          json
        }
        mapAddress {
          json
        }
        mapSettings
      }
    }
  }`;

  const data = await request({
    query,
    variables: {}
  });

  return data.contactPageCollection.items[0];
};
