import { request } from './client'

export const getHomepage = async (variables = null) => {
  const query = `query($preview: Boolean){
    homepageCollection(preview: $preview) {
      items {
        pageTitle
        dummyContent {
          json
        }
      }
    }
  }`;
  
  const data = await request({
    query,
    variables: {},
  });

  return data.homepageCollection.items[0];
}



