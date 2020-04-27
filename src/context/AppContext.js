//Context for the App

import * as Font from "expo-font";
import { Ionicons } from "@expo/vector-icons";
import React, { useState } from "react";
import Auth from "@aws-amplify/auth";

export const AppContext = React.createContext();
export const AppConsumer = AppContext.Consumer;

export const useAppContext = () => React.useContext(AppContext);

export const AppProvider = (props) => {
  const [isReady, setIsReady] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [authUser, setAuthUser] = useState(null);
  const [userToken, setUserToken] = useState(null);

  React.useEffect(() => {
    console.log("AppProvider->componentDidMount");
    // Load fonts
    Font.loadAsync({
      ...Ionicons.font,
      "space-mono": require("../../assets/fonts/SpaceMono-Regular.ttf"),
    });

    Auth.currentAuthenticatedUser()
      .then((user) => {
        setUserToken({
          userToken: user.signInUserSession.accessToken.jwtToken,
        });
        setIsReady(true);
        console.log("USERTOKEN: ", userToken);
        setIsAuthenticated(true);
        setAuthUser(user.signInUserSession.accessToken.payload);
      })
      .catch((err) => console.log("AuthenticationError: ", err));
  }, []);

  const logout = async () => {
    await Auth.signOut()
      .then(() => {
        setIsAuthenticated(false);
        setAuthUser(null);
      })
      .catch((err) => console.log("Error while signing out!", err));
  };

  const signIn = async (username, password) => {
    await Auth.signIn({
      username: username,
      password: password,
    })
      .then((user) => {
        setAuthUser(user);
        setIsAuthenticated(true);
      })
      .catch((err) => console.log("Error signing in: ", err));
  };

  const signUp = async (username, password, email, memberId) => {
    await Auth.signUp({
      username: username,
      password: password,
      attributes: {
        email: email,
        "custom:memberId": `${memberId}`,
      },
    })
      .then((user) => {
        setAuthUser(user);
        setIsAuthenticated(true);
      })
      .catch((err) => console.log("Error signing in: ", err));
  };

  return (
    <AppContext.Provider
      value={{
        isReady: isReady,
        isAuthenticated: isAuthenticated,
        logout: logout,
        authUser: authUser,
        signIn: signIn,
        signUp: signUp,
      }}
    >
      {props.children}
    </AppContext.Provider>
  );
};

export default useAppContext;
