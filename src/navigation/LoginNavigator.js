import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { AppConsumer, TabBarProvider } from "context";
import { strings } from "locales/i18n";
import React from "react";

import SignIn from "./screens/SignIn";
import SignUp from "./screens/SignUp";

const LoginNavigator = (props, state) => {
  return (
    <MainStack.Navigator headerMode="screen">
      <>
        <MainStack.Screen
          name="Login"
          component={SignIn}
          options={{
            title: "Log_in",
          }}
        />
        <MainStack.Screen
          name="SignUp"
          component={SignUp}
          options={{
            title: "LOGIN_Kom_igang_gratis",
          }}
        />
      </>
      )}
    </MainStack.Navigator>
  );
};

export default AppNavigator;
