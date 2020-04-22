import { Auth } from "aws-amplify";
import * as SecureStore from "expo-secure-store";

export const getOwnUser = () => {
  Auth.currentAuthenticatedUser().then((user) => {
    return user;
  });
};


export const isAuthenticated = () => {
  if (authToken != null && authToken.length > 0) {
    return true;
  }

  //If user deleted appdata we need to clear the authtoken from securestore to make user login again
  let isFirstStart = await isFreshStart();
  if (isFirstStart === true) {
    await SecureStore.deleteItemAsync("AUTH_jwtToken");
    await freshStartDone();
    return false;
  }

  let aToken = await SecureStore.getItemAsync("AUTH_jwtToken");
  if (aToken === null) {
    console.log("SecureStore.getItemAsync null");
    return false;
  }
  authToken = aToken;
  return true;
}