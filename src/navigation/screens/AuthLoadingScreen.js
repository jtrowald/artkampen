import React from "react";
import { ActivityIndicator, AsyncStorage } from "react-native";

export default class AuthLoadingScreen extends React.Component {
  componentDidMount = async () => {
    await this.loadApp();
  };
  loadApp = async () => {
    const userToken = await AsyncStorage.getItem("userToken");
    this.props.navigation.navigate(userToken ? "App" : "Auth");
  };
  render() {
    return (
      <View>
        <ActivityIndicator />
      </View>
    );
  }
}
