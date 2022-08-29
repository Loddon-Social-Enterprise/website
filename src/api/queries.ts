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

export const getHomepage = async (variables = null) => {
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

export const getWhatWeDoPage = async (variables = null) => {
  const query = `query($preview: Boolean) {
    pageCollection(limit: 1, where: { slug: "what-we-do" }, preview: $preview) {
      items {
        sys {
          id
        }
        pageTitle
        body {
          json
          links {
            entries {
              block {
                sys {
                  id
                }
                __typename
                ... on PartnerList {
                  slug
                  companyName
                  description {
                    json
                  }
                  logo {
                    url
                    width
                    height
                  }
                  testimonial {
                    json
                  }
                }
              }
            }
          }
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

export const getContactPage = async (variables = null) => {
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
