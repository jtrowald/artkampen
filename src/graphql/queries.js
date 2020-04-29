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
export const getUser = /* GraphQL */ `
  query GetUser($id: ID!) {
    getUser(id: $id) {
      id
      username
      confirmed
      contributions {
        items {
          id
          imageKey
          accepted
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
        username
        confirmed
        contributions {
          nextToken
        }
        owner
      }
      nextToken
    }
  }
`;
export const getContribution = /* GraphQL */ `
  query GetContribution($id: ID!) {
    getContribution(id: $id) {
      id
      createdBy {
        id
        username
        confirmed
        contributions {
          nextToken
        }
        owner
      }
      fish {
        id
        name
        description
        owner
      }
      imageKey
      accepted
    }
  }
`;
export const listContributions = /* GraphQL */ `
  query ListContributions(
    $filter: ModelContributionFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listContributions(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        createdBy {
          id
          username
          confirmed
          owner
        }
        fish {
          id
          name
          description
          owner
        }
        imageKey
        accepted
      }
      nextToken
    }
  }
`;
