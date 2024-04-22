import { gql } from '@apollo/client';

export  const ADD_TO_LIST = 
gql`
mutation AddToList($email: String!) {
  addToList(email: $email) {
    email
  }
}
`;

export const DELETE_FROM_LIST = 
gql`
mutation RemoveFromList($email: String!) {
  removeFromList(email: $email) {
    _id
    email
  }
}
`;

export const ADD_BLOG = gql`
mutation AddBlog(
  $blogUrl: String!, 
  $description: String!, 
  $image: String!) 
  {
  addBlog(
    blogURL: $blogUrl, 
    description: $description, 
    image: $image) 
    {
    blogURL
    }  
  }
`;
// Important for useMutation: We bring in gql from the @apollo/client library to allow us to parse mutations (and queries) as template literals

// Important for useMutation: Each mutation we'd like to be able to perform gets exported out of our mutations.js utility
export const ADD_PROFILE = gql`
  mutation addProfile($name: String!) {
    addProfile(name: $name) {
      _id
      name
      skills
    }
  }
`;

export const ADD_SKILL = gql`
  mutation addSkill($profileId: ID!, $skill: String!) {
    addSkill(profileId: $profileId, skill: $skill) {
      _id
      name
      skills
    }
  }
`;
