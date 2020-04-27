/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateFish = /* GraphQL */ `
  subscription OnCreateFish {
    onCreateFish {
      id
      name
      description
    }
  }
`;
export const onUpdateFish = /* GraphQL */ `
  subscription OnUpdateFish {
    onUpdateFish {
      id
      name
      description
    }
  }
`;
export const onDeleteFish = /* GraphQL */ `
  subscription OnDeleteFish {
    onDeleteFish {
      id
      name
      description
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
      }
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
      }
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
      }
      accepted
    }
  }
`;
