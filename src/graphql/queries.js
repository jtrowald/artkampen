/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getFish = /* GraphQL */ `
  query GetFish($id: ID!) {
    getFish(id: $id) {
      id
      name
      description
      owner
    }
  }
`;
export const listFishs = /* GraphQL */ `
  query ListFishs(
    $filter: ModelFishFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listFishs(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        description
        owner
      }
      nextToken
    }
  }
`;
export const getSubmission = /* GraphQL */ `
  query GetSubmission($id: ID!) {
    getSubmission(id: $id) {
      id
      fish {
        id
        name
        description
        owner
      }
      image {
        bucket
        region
        key
      }
      accepted
      user {
        id
        accepted
        memberId
        email
        submissions {
          nextToken
        }
        owner
      }
      owner
    }
  }
`;
export const listSubmissions = /* GraphQL */ `
  query ListSubmissions(
    $filter: ModelSubmissionFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listSubmissions(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        fish {
          id
          name
          description
          owner
        }
        image {
          bucket
          region
          key
        }
        accepted
        user {
          id
          accepted
          memberId
          email
          owner
        }
        owner
      }
      nextToken
    }
  }
`;
export const getUser = /* GraphQL */ `
  query GetUser($id: ID!) {
    getUser(id: $id) {
      id
      accepted
      memberId
      email
      submissions {
        items {
          id
          accepted
          owner
        }
        nextToken
      }
      owner
    }
  }
`;
export const listUsers = /* GraphQL */ `
  query ListUsers(
    $filter: ModelUserFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listUsers(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        accepted
        memberId
        email
        submissions {
          nextToken
        }
        owner
      }
      nextToken
    }
  }
`;
