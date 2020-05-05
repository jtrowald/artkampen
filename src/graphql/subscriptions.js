/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateFish = /* GraphQL */ `
  subscription OnCreateFish($owner: String) {
    onCreateFish(owner: $owner) {
      id
      name
      description
      owner
    }
  }
`;
export const onUpdateFish = /* GraphQL */ `
  subscription OnUpdateFish($owner: String) {
    onUpdateFish(owner: $owner) {
      id
      name
      description
      owner
    }
  }
`;
export const onDeleteFish = /* GraphQL */ `
  subscription OnDeleteFish($owner: String) {
    onDeleteFish(owner: $owner) {
      id
      name
      description
      owner
    }
  }
`;
export const onCreateSubmission = /* GraphQL */ `
  subscription OnCreateSubmission($owner: String!) {
    onCreateSubmission(owner: $owner) {
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
export const onUpdateSubmission = /* GraphQL */ `
  subscription OnUpdateSubmission($owner: String!) {
    onUpdateSubmission(owner: $owner) {
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
export const onDeleteSubmission = /* GraphQL */ `
  subscription OnDeleteSubmission($owner: String!) {
    onDeleteSubmission(owner: $owner) {
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
export const onCreateUser = /* GraphQL */ `
  subscription OnCreateUser {
    onCreateUser {
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
export const onUpdateUser = /* GraphQL */ `
  subscription OnUpdateUser($owner: String!) {
    onUpdateUser(owner: $owner) {
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
export const onDeleteUser = /* GraphQL */ `
  subscription OnDeleteUser($owner: String!) {
    onDeleteUser(owner: $owner) {
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
