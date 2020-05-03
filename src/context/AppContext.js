//Context for the App

import * as Font from 'expo-font';
import { Ionicons } from '@expo/vector-icons';
import React, { useState } from 'react';
import Auth from '@aws-amplify/auth';
import { API, graphqlOperation } from 'aws-amplify';

import { getUser as GetUser } from '../graphql/queries';
import { createUser as CreateUser } from '../graphql/mutations';

export const AppContext = React.createContext();
export const AppConsumer = AppContext.Consumer;

export const useAppContext = () => React.useContext(AppContext);

export const AppProvider = (props) => {
  const [isReady, setIsReady] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [authUser, setAuthUser] = useState(null);
  const [authDBUser, setAuthDBUser] = useState(null);
  const [userToken, setUserToken] = useState(null);
  const [signUpErrors, setSignUpErrors] = useState(null);

  const createDBUser = async (user) => {
    console.log('CREATE USER: ', user);
    await API.graphql(
      graphqlOperation(CreateUser, {
        input: {
          username: user.username,
          id: user.attributes.sub,
          confirmed: false,
        },
      }),
    )
      .then((result) => setAuthDBUser(result?.data))
      .catch((err) => console.log('Error creating db user: ', err));
  };

  const getCurrentDBUser = async (user) => {
    await API.graphql(graphqlOperation(GetUser, { id: user.attributes.sub }))
      .then((result) => {
        console.log(('GETDBUSER', result));
        if (result?.data?.getUser !== null) {
          setAuthDBUser(result?.data);
        } else {
          createDBUser(user);
        }
      })
      .catch((err) => console.log(err));
  };

  const logout = async () => {
    await Auth.signOut()
      .then(() => {
        setIsAuthenticated(false);
        setAuthUser(null);
      })
      .catch((err) => console.log('Error while signing out!', err));
  };

  const loggedInSuccess = (user) => {
    setIsReady(true);
    setAuthUser(user.signInUserSession.accessToken.payload);
    getCurrentDBUser(user);
    setIsAuthenticated(true);
  };

  const signIn = async (username, password) => {
    await Auth.signIn({
      username,
      password,
    })
      .then((user) => {
        loggedInSuccess(user);
      })
      .catch((err) => console.log('Error signing in: ', err));
  };

  const signUp = async (username, password, email, memberId) => {
    await Auth.signUp({
      username,
      password,
      attributes: {
        email,
        'custom:memberId': `${memberId}`,
      },
    })
      .then((user) => {
        console.log('SIGNUP:', user);
        setSignUpErrors(null);
        setAuthUser(user);
      })
      .catch((err) => {
        console.log('Error signing up: ', err);
        setSignUpErrors(err.message);
      });
  };

  const confirmSignUp = async (username, code) => {
    await Auth.confirmSignUp(username, code)
      .then(() => {
        //TO SIGN IN WINDOW
      })
      .catch((err) => {
        console.log('Error confirm signing up: ', err);
        setSignUpErrors(err.message);
      });
  };

  React.useEffect(() => {
    console.log('AppProvider->componentDidMount');
    // Load fonts
    Font.loadAsync({
      ...Ionicons.font,
      'space-mono': require('../../assets/fonts/SpaceMono-Regular.ttf'),
    });

    Auth.currentAuthenticatedUser()
      .then(async (user) => {
        setUserToken({
          userToken: user.signInUserSession.accessToken.jwtToken,
        });
        loggedInSuccess(user);
      })
      .catch((err) => console.log('AuthenticationError: ', err));
  }, []);

  return (
    <AppContext.Provider
      value={{
        isReady,
        isAuthenticated,
        logout,
        authUser,
        authDBUser,
        signIn,
        signUp,
        confirmSignUp,
        signUpErrors,
      }}
    >
      {props.children}
    </AppContext.Provider>
  );
};

export default useAppContext;
