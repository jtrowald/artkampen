import React, { useState, useEffect } from "react";
import { ActivityIndicator, View } from "react-native";
import Auth from "@aws-amplify/auth";

export const AuthLoadingScreen = (props) => {
  [userToken, setUserToken] = useState(null);

  useEffect(() => {
    loadApp();
  }, []);

  const loadApp = async () => {
    // await Auth.currentAuthenticatedUser()
    //   .then((user) => {
    //     // Auth.signOut();
    //     setUserToken({
    //       userToken: user.signInUserSession.accessToken.jwtToken,
    //     });
    //   })
    //   .catch((err) => console.log(err));
    // console.log(userToken);
    // props.navigation.navigate(userToken ? "TabBar" : "Welcome");
  };

  return (
    <View>
      <ActivityIndicator />
    </View>
  );
};

export default AuthLoadingScreen;
