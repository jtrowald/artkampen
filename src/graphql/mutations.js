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
export const createSubmission = /* GraphQL */ `
  mutation CreateSubmission(
    $input: CreateSubmissionInput!
    $condition: ModelSubmissionConditionInput
  ) {
    createSubmission(input: $input, condition: $condition) {
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
export const updateSubmission = /* GraphQL */ `
  mutation UpdateSubmission(
    $input: UpdateSubmissionInput!
    $condition: ModelSubmissionConditionInput
  ) {
    updateSubmission(input: $input, condition: $condition) {
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
export const deleteSubmission = /* GraphQL */ `
  mutation DeleteSubmission(
    $input: DeleteSubmissionInput!
    $condition: ModelSubmissionConditionInput
  ) {
    deleteSubmission(input: $input, condition: $condition) {
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
export const createUser = /* GraphQL */ `
  mutation CreateUser(
    $input: CreateUserInput!
    $condition: ModelUserConditionInput
  ) {
    createUser(input: $input, condition: $condition) {
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
export const updateUser = /* GraphQL */ `
  mutation UpdateUser(
    $input: UpdateUserInput!
    $condition: ModelUserConditionInput
  ) {
    updateUser(input: $input, condition: $condition) {
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
export const deleteUser = /* GraphQL */ `
  mutation DeleteUser(
    $input: DeleteUserInput!
    $condition: ModelUserConditionInput
  ) {
    deleteUser(input: $input, condition: $condition) {
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
