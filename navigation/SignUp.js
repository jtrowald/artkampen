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

export const SignUp = () => {
  const [userName, setUserName] = useState();
  const [password, setPassword] = useState();
  const [email, setEmail] = useState();
  const [memberId, setMemberId] = useState();

  const signUp = () => {
    Auth.signUp({
      username: userName,
      password: password,
      attributes: {
        email: email,
      },
    })
      .then(() => console.log("Signed up"))
      .catch((err) => console.log("Error signing up: ", err));
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
