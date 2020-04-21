import React, { useState, useEffect } from "react";
import { ActivityIndicator, View } from "react-native";
import Auth from "@aws-amplify/auth";

// export default class AuthLoadingScreen extends React.Component {
//   componentDidMount = async () => {
//     await this.loadApp();
//   };
//   loadApp = async () => {
//     const userToken = await AsyncStorage.getItem("userToken");
//     this.props.navigation.navigate(userToken ? "App" : "Auth");
//   };
//   render() {
//     return (
//       <View>
//         <ActivityIndicator />
//       </View>
//     );
//   }
// }

export const AuthLoadingScreen = (props) => {
  [userToken, setUserToken] = useState();

  useEffect(() => {
    loadApp();
  }, [props, userToken]);

  const loadApp = async () => {
    await Auth.currentAuthenticatedUser()
      .then((user) => {
        setUserToken({
          userToken: user.signInUserSession.accessToken.jwtToken,
        });
      })
      .catch((err) => console.log(err));
    console.log(userToken);
    console.log(props.navigation);
    //props.navigation.navigate(userToken ? "TabBar" : "Welcome");
  };

  return (
    <View>
      <ActivityIndicator />
    </View>
  );
};

export default AuthLoadingScreen;
