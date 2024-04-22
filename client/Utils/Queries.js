import { gql } from '@apollo/client';

export const FIND_ONE_LIST = 
gql`
query List($email: String!) {
  list(email: $email) {
    _id
    email
  }
}
`;

export const FIND_ALL_LIST = 
gql`
query Lists {
  lists {
    _id
    email
  }
}
`;


export const QUERY_PROFILES = gql`
  query allProfiles {
    profiles {
      _id
      name
      skills
    }
  }
`;

export const QUERY_SINGLE_PROFILE = gql`
  query singleProfile($profileId: ID!) {
    profile(profileId: $profileId) {
      _id
      name
      skills
    }
  }
`;


