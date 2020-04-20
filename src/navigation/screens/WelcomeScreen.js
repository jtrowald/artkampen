import React from "react";
import { View } from "react-native";
import styled from "styled-components";

const Text = styled.Text`
  font-size: 23px;
  padding: 10px;
  color: white;
`;

const TouchableOpacity = styled.TouchableOpacity`
  padding: 20px;
`;

const Wrapper = styled.View`
  flex: 1;
  background-color: #0090d2;
  align-items: center;
  justify-content: center;
`;

export default class WelcomeScreen extends React.Component {
  handleRoute = async (destination) => {
    await this.props.navigation.navigate(destination);
  };
  render() {
    return (
      <Wrapper>
        <TouchableOpacity
          onPress={() => this.props.navigation.navigate("SignUp")}
        >
          <Text>Skapa konto</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => this.props.navigation.navigate("SignIn")}
        >
          <Text>Logga in</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => this.props.navigation.navigate("ForgotPassword")}
        >
          <Text>Glömt lösenord?</Text>
        </TouchableOpacity>
      </Wrapper>
    );
  }
}
