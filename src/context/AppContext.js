//Context for the App

import { getOwnUser, isAuthenticated, removeCredentials } from "api";
import * as Font from "expo-font";
import { Ionicons } from "@expo/vector-icons";
import * as React from "react";

//Initial State
const initialState = {
  isReady: false,
  isAuthenticated: false,
  authUser: null,
};

export const AppContext = React.createContext();
export const AppConsumer = AppContext.Consumer;

export const useAppContext = () => React.useContext(AppContext);

export class AppProvider extends React.Component {
  constructor(props) {
    super(props);
    this.state = initialState;
  }

  async componentDidMount() {
    console.log("AppProvider->componentDidMount");
    // Load fonts
    await Font.loadAsync({
      ...Ionicons.font,
      "space-mono": require("./assets/fonts/SpaceMono-Regular.ttf"),
    });
    let isAuth = await isAuthenticated();
    console.log("->checkAuthStatus->" + isAuth);
    this.checkAuthStatus(({ isAuthenticated, authUser }) => {
      this.setState({
        isReady: true,
        isAuthenticated,
        authUser,
      });
    });
  }

  async checkAuthStatus(callback) {
    let isAuth = await isAuthenticated();
    let authUser = await getOwnUser();
    console.log("checkAuthStatus->" + isAuth);
    callback({ isAuthenticated: isAuth, authUser });
  }

  authenticate = () => {
    console.log("authenticate");
    this.checkAuthStatus((authObject) => {
      this.setState({
        isAuthenticated: authObject.isAuthenticated,
        authUser: authObject.authUser,
      });
    });
  };

  logout = () => {
    removeCredentials();
    this.setState({ isAuthenticated: false });
  };

  render() {
    return (
      <AppContext.Provider
        value={{
          isReady: this.state.isReady,
          isAuthenticated: this.state.isAuthenticated,
          authenticate: this.authenticate,
          logout: this.logout,
          authUser: this.state.authUser,
        }}
      >
        {this.props.children}
      </AppContext.Provider>
    );
  }
}
