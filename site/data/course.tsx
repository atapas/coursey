import { gql } from "graphql-request";
import { getClient } from '@/service/graphQLClient';

export const getAllCourses = async() => {
  const client = getClient();
  const gqlResponse: any = await client.request(
    gql`
      query allCourses {
        allCourses {
          totalCount
          edges {
            node {
              rating
              price
              name
              id
              cover {
                src
              }
              description {
                json
              }
            }
          }
        }
      }
    `
  );
 
  return {
    data: gqlResponse?.allCourses?.edges || [],
    totalCount: gqlResponse?.allCourses?.totalCount || 0,
  }; 
}