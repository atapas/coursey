import { gql } from "graphql-request";
import { getClient } from '@/service/graphQLClient';

/**
 * Get all the courses from the data store
 * @returns An Array of course data
 */
export const getAllCourses = async() => {
  const client = getClient(false);
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
              category
              price
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

/**
 * 
 * @param slug Get a Course information by the slug
 * @returns A Course data object
 */
export const getCourse = async(slug: String) => {
  const client = getClient(false);
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
              category
              price
              publishedOn
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

/**
 * Add a comment to a course data object
 * @param commentObj The Comment object to add to the course
 * @param course The Course object where we need to add the comment
 * @returns Updated course object with the comment added to it.
 */
export const addCommentToCourse = async(commentObj: any, course: any) => {
  // First add the comment to the data store and get it's ID
  const addCommentResponse: any = await addComment(commentObj);
  const commentId = addCommentResponse?.createComments?.id;
  // Now update the respective course with the comment id
  const updateCourseResponse: any = await updateCourse(commentId, course);

  return updateCourseResponse?.updateCourses;
}

/**
 * Add a Comment to the data store.
 * @param commentsObj The Comment object consists of name, data, etc.
 * @returns The resoponse with the created comment id.
 */
const addComment = async(commentsObj: any) => {
  try{
    const client = getClient(true);

    const mutation = gql`
      mutation createComments($input: Comments_CreateInput!) {
        createComments(input: $input) {
          id
        }
      }
    `
    const response = await client.request(mutation, {"input": commentsObj});
    return response;
  } catch(exception: any) {
    console.log(`Error ${exception}`);
  }  
}

/**
 * Update the Course with the new Comment
 * @param commentId The new comment id
 * @param course The Course data
 * @returns The update response of the course mutation
 */
const updateCourse = async(commentId: String, course: any) => {
  
  console.log(`Let's add the ${commentId} for the ${course?.data.id}`);

  try{
    const client = getClient(true);

    const mutation = gql`
      mutation updateCourses($id: ID!, $input: Courses_UpdateInput!) {
        updateCourses(id: $id, input: $input) {
          id
          name
        }
      }
    `
    // Get the existing comments for the course
    const existingComments = course?.data?.comments;
    // Map out the existing comment ids
    const existingCommentIds = existingComments.map((comment: any) => {
      return comment.id;
    });
    // Add the new comment id to the array.
    const updatedCommentIds = [commentId, ...existingCommentIds];
    

    const variable = {
      "id" : `${course?.data.id}`,
      "input":{"comments": updatedCommentIds}
    }
    const response = await client.request(mutation, variable);
    return response;
  } catch(exception: any) {
    console.error(`Error ${exception}`);
  }  
}