import React from "react";
import { ActivityIndicator, StyleSheet, AsyncStorage } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
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
      <View style={styles.container}>
        <ActivityIndicator />
      </View>
    );
  }
}
