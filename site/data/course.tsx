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
              name
              id
              slug
              cover {
                src
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

export const getCourse = async(slug: String) => {
  const client = getClient();
  const gqlResponse: any = await client.request(
    gql`
      query allCourses($slug: String) {
        allCourses(where: { slug: { eq: $slug } }) {
          edges {
            node {
              comments {
                ... on Comments {
                  id
                  email
                  name
                  rating
                  commentedOn
                  data{
                    json
                  }
                }
              }
              cover {
                src
              }
              description {
                json
              }
              duration
              id
              link
              name
              price
              publishedOn
              rating
              type
              updatedOn
            }
          }
        }
      }
    `,
    { slug: slug }
  );
 
  return {
    data: gqlResponse?.allCourses?.edges?.[0]?.node || {},
  }; 
}

export const addCommentToCourse = async(commentObj: any) => {
  console.log(commentObj);
}