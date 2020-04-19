import {
  ActionSheetProvider,
  connectActionSheet,
} from "@expo/react-native-action-sheet";
import { Providers } from "context";
import React from "react";
import { StatusBar } from "react-native";

import AppNavigator from "./views/navigators/AppNavigator";

class App extends React.Component {
  render() {
    return (
      <Providers>
        <AppNavigator />
      </Providers>
    );
  }
}

const AppWithActionSheet = connectActionSheet(App);

export default class AppContainer extends React.Component {
  render() {
    return (
      <ActionSheetProvider>
        <AppWithActionSheet />
      </ActionSheetProvider>
    );
  }
}
