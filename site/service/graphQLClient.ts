import { gql, GraphQLClient } from "graphql-request";

export const getClient = (preview: boolean): GraphQLClient => {
  const headers: any = {
    "x-caisy-apikey": process.env.CAISEY_API_KEY!,
  }; 
  if (preview) {
    headers["x-caisy-preview"] = "true";
  }
  const client = new GraphQLClient(
    `https://cloud.caisy.io/api/v3/e/${process.env.CAISY_PROJECT_ID}/graphql`,
    {
      headers: headers,
    }
  );

  return client;
}


