import { request } from './client';

export const getGenericPage = async (slug: string, variables = null) => {
  const query = `query($preview: Boolean) {
    pageCollection(limit: 1, where: { slug: "${slug}" }, preview: $preview) {
      items {
        sys {
          id
        }
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

export const getHomepage = async () => {
  const query = `query($preview: Boolean){
    homepageCollection(limit: 1, preview: $preview) {
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

export const getContactPage = async () => {
  const query = `query($preview: Boolean){
    contactPageCollection(limit: 1, preview: $preview) {
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

export const getSiteFooter = async () => {
  const query = `query($preview: Boolean){
    footerCollection(limit: 1, where: { slug: "footer" }, preview: $preview) {
      items {
        sys {
          id
        }
        registrations {
          json
        }
        contacts {
          json
        }
      }
    }
  }`;

  const data = await request({
    query,
    variables: {}
  });

  return data.footerCollection.items[0];
};
