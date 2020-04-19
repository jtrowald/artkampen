import React, { useState } from "react";
import { TextInput, Button, Text, View } from "react-native";

import styled from "styled-components";
import { Auth } from "aws-amplify";
const StyledInput = styled.TextInput`
  height: 50px;
  border-bottom-width: 2px;
  border-bottom-color: green;
  margin: 20px;
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
      .then(() => console.log("Signed in"))
      .catch((err) => console.log("Error signing in: ", err));
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
      <Button title="Logga in" onPress={() => SignIn()} />
    </View>
  );
};

export default SignIn;
