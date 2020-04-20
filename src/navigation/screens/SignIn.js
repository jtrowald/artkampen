import React, { useState } from "react";
import { TextInput, Button, Text, View } from "react-native";

import styled from "styled-components";
import { Auth } from "aws-amplify";

const StyledInput = styled.TextInput`
  height: 50px;
  border-bottom-width: 3px;
  border-bottom-color: white;
  margin: 20px;
`;

const MainView = styled.View`
  background-color: #0090d2;
  flex: 1;
`;

export const SignIn = () => {
  const [userName, setUserName] = useState();
  const [password, setPassword] = useState();
  const [email, setEmail] = useState();
  const [memberId, setMemberId] = useState();

  const SignIn = () => {
    Auth.signIn({
      username: userName,
      password: password,
    })
      .then((res) => console.log("Signed in", res))
      .catch((err) => console.log("Error signing in: ", err));
  };
  return (
    <MainView>
      <StyledInput
        onChangeText={(value) => setUserName(value)}
        placeholder="Användarnamn"
        placeholderTextColor="white"
      />
      <StyledInput
        onChangeText={(value) => setPassword(value)}
        placeholder="Lösenord"
        secureTextEntry
        placeholderTextColor="white"
      />
      <Button color="white" title="Logga in" onPress={() => SignIn()} />
    </MainView>
  );
};

export default SignIn;
