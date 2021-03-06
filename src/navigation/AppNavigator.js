import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';

import AuthLoadingScreen from './screens/AuthLoadingScreen';
import WelcomeScreen from './screens/WelcomeScreen';
import SignIn from './screens/SignIn';
import SignUp from './screens/SignUp';
import ForgotPassword from './screens/ForgotPassword';
import BottomTabNavigator from './BottomTabNavigator';
import ProfileScreen from './screens/ProfileScreen';
import SettingsScreen from './screens/SettingsScreen';
import LoadingModal from './LoadingModal';
import { useAppContext } from '../context/AppContext';

const AuthStack = createStackNavigator();
const AuthStackNavigator = () => (
  <AuthStack.Navigator>
    {/* <AuthStack.Screen name="AuthLoadingScreen" component={AuthLoadingScreen} /> */}
    <AuthStack.Screen name="Welcome" component={WelcomeScreen} />
    <AuthStack.Screen name="SignIn" component={SignIn} />
    <AuthStack.Screen name="SignUp" component={SignUp} />
    <AuthStack.Screen name="ForgotPassword" component={ForgotPassword} />
  </AuthStack.Navigator>
);

const Drawer = createDrawerNavigator();
const AppDrawerNavigator = () => (
  <Drawer.Navigator>
    <Drawer.Screen name="TabBar" component={BottomTabNavigator} />
    <Drawer.Screen name="ProfileScreen" component={ProfileScreen} />
    <Drawer.Screen name="Settings" component={SettingsScreen} />
    <Drawer.Screen name="LoadingModal" component={LoadingModal} />
  </Drawer.Navigator>
);

export const AppNavigator = ({ isAuth = false, isLoading }) => {
  const context = useAppContext();
  return (
    <NavigationContainer>
      {context.isAuthenticated ? (
        <AppDrawerNavigator />
      ) : (
        <AuthStackNavigator />
      )}
    </NavigationContainer>
  );
};

export default AppNavigator;
