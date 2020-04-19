import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { AppConsumer, TabBarProvider } from "context";
import { strings } from "locales/i18n";
import React from "react";

import { useAppContext } from "../../context";
import SignUpController from "../onboarding/SignUpController";
import LoginNavigator from "../user/auth/LoginController";
import MainDrawer from "./Drawer";
import routes from "./routes";

const MainStack = createStackNavigator();

const AppNavigator = (props, state) => {
  const context = useAppContext();
  if (!context?.isReady) {
    return null;
  }
  const { isSignout } = state;
  return (
    <TabBarProvider>
      <NavigationContainer>
        <MainStack.Navigator headerMode="none">
          {context.isAuthenticated ? (
            <MainStack.Screen name={routes.ROOT} component={MainDrawer} />
          ) : (
            // User is signed in
            // No token found, user isn't signed in
            <>
              <MainStack.Screen
                name="Login"
                component={LoginNavigator}
                options={{
                  title: strings("Log_in"),
                  // When logging out, a pop animation feels intuitive
                  // You can remove this if you want the default 'push' animation
                  animationTypeForReplace: isSignout ? "pop" : "push",
                }}
              />
              <MainStack.Screen
                name="SignUp"
                component={SignUpController}
                options={{
                  title: strings("LOGIN_Kom_igang_gratis"),
                }}
              />
            </>
          )}
        </MainStack.Navigator>
      </NavigationContainer>
    </TabBarProvider>
  );
};

export default AppNavigator;
