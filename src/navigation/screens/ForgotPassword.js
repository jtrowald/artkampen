import React from "react";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";

export default class ForgotPassword extends React.Component {
  handleRoute = async (destination) => {
    await this.props.navigation.navigate(destination);
  };
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.textStyle}>Forget password ?</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#aa73b7",
    alignItems: "center",
    justifyContent: "center",
  },
  buttonStyle: {
    padding: 20,
  },
  textStyle: {
    fontSize: 18,
    padding: 10,
  },
});
