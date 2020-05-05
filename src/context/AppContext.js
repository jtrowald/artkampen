import * as Font from 'expo-font';
import { Ionicons } from '@expo/vector-icons';
import React, { useState } from 'react';
import Auth from '@aws-amplify/auth';
import { API, graphqlOperation } from 'aws-amplify';
import { createUser as CreateUser } from '../graphql/mutations';
import { getUser as GetUser } from '../graphql/queries';
import { useNavigation } from '@react-navigation/native';

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
  const [signInErrors, setSignInErrors] = useState(null);
  const [showSignUpModal, setShowSignUpModal] = useState(false);

  const createDBUser = async (user) => {
    console.log('CREATE USER: ', user);
    await API.graphql(
      graphqlOperation(CreateUser, {
        input: {
          email: user.attributes.email,
          id: user.attributes.sub,
          memberId: user.attributes['custom:memberId'],
          accepted: false,
        },
      }),
    )
      .then((result) => setAuthDBUser(result?.data))
      .catch((err) => console.log('Error creating db user: ', err));
  };

  const getCurrentDBUser = async (user) => {
    console.log('GET USER:', user);
    await API.graphql(graphqlOperation(GetUser, { id: user.attributes.sub }))
      .then((result) => {
        console.log(('GETDBUSER', result));
        if (result?.data?.getUser !== null) {
          setAuthDBUser(result?.data);
        } else {
          createDBUser(user);
        }
      })
      .catch((err) => console.log('Could not fetch DB user: ', err));
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
    setIsAuthenticated(true);
  };

  const signIn = async (username, password) => {
    await Auth.signIn({
      username,
      password,
    })
      .then(async (user) => {
        await getCurrentDBUser(user);
        loggedInSuccess(user);
      })
      .catch((err) => {
        setSignInErrors(err.code);
        console.log('Error signing in: ', err);
      });
  };

  const signUp = async (username, password, memberId) => {
    await Auth.signUp({
      username,
      password,
      attributes: {
        'custom:memberId': `${memberId}`,
      },
    })
      .then(() => {
        setSignUpErrors(null);
      })
      .catch((err) => {
        console.log('Error signing up: ', err);
        setSignUpErrors(err.message);
      });
  };

  const confirmSignUp = async (username, code) => {
    await Auth.confirmSignUp(username, code)
      .then(() => {
        setShowSignUpModal(true);
      })
      .catch((err) => {
        console.log('Error confirm signing up: ', err);
        setSignUpErrors(err.message);
      });
  };

  const resendConfirmationCode = async (username) => {
    await Auth.resendSignUp(username)
      .then(() => {
        console.log('code resent succesfully');
      })
      .catch((err) => {
        console.log('error resending code: ', err);
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
        getCurrentDBUser(user);
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
        signInErrors,
        signUpErrors,
        showSignUpModal,
        setShowSignUpModal,
        resendConfirmationCode,
      }}
    >
      {props.children}
    </AppContext.Provider>
  );
};

export default useAppContext;
