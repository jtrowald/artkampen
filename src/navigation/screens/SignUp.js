import React, { useState } from "react";
import { AsyncStorage, Button, Text, View } from "react-native";

import styled from "styled-components";
import { Auth } from "aws-amplify";
const StyledInput = styled.TextInput`
  height: 50px;
  border-bottom-width: 2px;
  border-bottom-color: green;
  margin: 20px;
`;

export const SignUp = () => {
  const [userName, setUserName] = useState();
  const [password, setPassword] = useState();
  const [email, setEmail] = useState();
  const [memberId, setMemberId] = useState();

  const signUp = async () => {
    try {
      const user = Auth.signUp({
        username: userName,
        password: password,
        attributes: {
          email: email,
        },
      });
      await AsyncStorage.setItem("userToken", "123456789");
      await console.log(user);
      this.props.navigation.navigate("Authloading");
    } catch (error) {
      console.log("error signing up:", error);
    }
  };
  return (
    <View>
      <StyledInput
        onChangeText={(value) => setUserName(value)}
        placeholder="Användarnamn"
      />
      <StyledInput
        onChangeText={(value) => setPassword(value)}
        placeholder="Lösenord"
        secureTextEntry
      />
      <StyledInput
        onChangeText={(value) => setEmail(value)}
        placeholder="Email"
      />
      <StyledInput
        onChangeText={(value) => setMemberId(value)}
        placeholder="Medlems-id"
      />
      <Button title="Skapa konto" onPress={() => signUp()} />
    </View>
  );
};

export default SignUp;
