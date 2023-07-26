import { gql, GraphQLClient } from "graphql-request";

export const getClient = (): GraphQLClient => {
  const client = new GraphQLClient(
    `https://cloud.caisy.io/api/v3/e/${process.env.CAISY_PROJECT_ID}/graphql`,
    {
      headers: {
        "x-caisy-apikey": process.env.CAISEY_API_KEY!,
      },
    }
  );

  return client;
}


