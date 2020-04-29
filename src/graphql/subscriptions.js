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
export const onCreateUser = /* GraphQL */ `
  subscription OnCreateUser($owner: String) {
    onCreateUser(owner: $owner) {
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
export const onUpdateUser = /* GraphQL */ `
  subscription OnUpdateUser($owner: String) {
    onUpdateUser(owner: $owner) {
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
export const onDeleteUser = /* GraphQL */ `
  subscription OnDeleteUser($owner: String) {
    onDeleteUser(owner: $owner) {
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
export const onCreateContribution = /* GraphQL */ `
  subscription OnCreateContribution {
    onCreateContribution {
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
export const onUpdateContribution = /* GraphQL */ `
  subscription OnUpdateContribution {
    onUpdateContribution {
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
export const onDeleteContribution = /* GraphQL */ `
  subscription OnDeleteContribution {
    onDeleteContribution {
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
