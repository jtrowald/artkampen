import { Auth } from "aws-amplify";

export const getOwnUser = () => {
  Auth.currentAuthenticatedUser().then((user) => {
    return user;
  });
};
