/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createFish = /* GraphQL */ `
  mutation CreateFish(
    $input: CreateFishInput!
    $condition: ModelFishConditionInput
  ) {
    createFish(input: $input, condition: $condition) {
      id
      name
      description
      owner
    }
  }
`;
export const updateFish = /* GraphQL */ `
  mutation UpdateFish(
    $input: UpdateFishInput!
    $condition: ModelFishConditionInput
  ) {
    updateFish(input: $input, condition: $condition) {
      id
      name
      description
      owner
    }
  }
`;
export const deleteFish = /* GraphQL */ `
  mutation DeleteFish(
    $input: DeleteFishInput!
    $condition: ModelFishConditionInput
  ) {
    deleteFish(input: $input, condition: $condition) {
      id
      name
      description
      owner
    }
  }
`;
export const createUser = /* GraphQL */ `
  mutation CreateUser(
    $input: CreateUserInput!
    $condition: ModelUserConditionInput
  ) {
    createUser(input: $input, condition: $condition) {
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
export const updateUser = /* GraphQL */ `
  mutation UpdateUser(
    $input: UpdateUserInput!
    $condition: ModelUserConditionInput
  ) {
    updateUser(input: $input, condition: $condition) {
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
export const deleteUser = /* GraphQL */ `
  mutation DeleteUser(
    $input: DeleteUserInput!
    $condition: ModelUserConditionInput
  ) {
    deleteUser(input: $input, condition: $condition) {
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
export const createContribution = /* GraphQL */ `
  mutation CreateContribution(
    $input: CreateContributionInput!
    $condition: ModelContributionConditionInput
  ) {
    createContribution(input: $input, condition: $condition) {
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
export const updateContribution = /* GraphQL */ `
  mutation UpdateContribution(
    $input: UpdateContributionInput!
    $condition: ModelContributionConditionInput
  ) {
    updateContribution(input: $input, condition: $condition) {
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
export const deleteContribution = /* GraphQL */ `
  mutation DeleteContribution(
    $input: DeleteContributionInput!
    $condition: ModelContributionConditionInput
  ) {
    deleteContribution(input: $input, condition: $condition) {
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
