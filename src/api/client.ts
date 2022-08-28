import { GraphQLClient, RequestDocument, Variables } from 'graphql-request';

interface RequestArgs {
  query: RequestDocument;
  variables: Variables;
  preview?: boolean;
}

const endpoint = `https://graphql.contentful.com/content/v1/spaces/${process.env.CONTENTFUL_SPACE_ID}`;

export function request({ query, variables, preview = false }: RequestArgs) {
  const token = preview ? process.env.NEXT_PUBLIC_CONTENTFUL_PREVIEW_ACCESS_TOKEN : process.env.CONTENTFUL_ACCESS_TOKEN;

  const client = new GraphQLClient(endpoint, {
    headers: {
      Authorization: `Bearer ${token}`,
      'Content-Type': 'application/json'
    }
  });

  return client.request(query, variables);
}
