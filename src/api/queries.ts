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

export const getWhatWeDoPage = async (variables = null) => {
  const query = `query($preview: Boolean){
    whatWeDoPageCollection(preview: $preview) {
      items {
        pageTitle
        mainContentBody {
          json
        }
      }
    }
  }`;

  const data = await request({
    query,
    variables: {}
  });

  return data.whatWeDoPageCollection.items[0];
};
