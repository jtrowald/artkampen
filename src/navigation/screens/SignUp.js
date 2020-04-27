import React, { useState } from "react";
import { AsyncStorage } from "react-native";

import styled from "styled-components";
import { useAppContext } from "../../context/AppContext";

const StyledInput = styled.TextInput`
  height: 50px;
  border-bottom-width: 3px;
  border-bottom-color: white;
  margin: 20px;
  color: white;
`;

const MainView = styled.View`
  background-color: #0090d2;
  flex: 1;
`;

const Button = styled.Button`
  color: white;
`;

export const SignUp = () => {
  const [username, setUserName] = useState();
  const [password, setPassword] = useState();
  const [email, setEmail] = useState();
  const [memberId, setMemberId] = useState();
  const context = useAppContext();

  const signUp = async () => {
    context.signUp(username, password, email, memberId);
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
        placeholderTextColor="white"
        secureTextEntry
      />
      <StyledInput
        onChangeText={(value) => setEmail(value)}
        placeholder="Email"
        placeholderTextColor="white"
      />
      <StyledInput
        onChangeText={(value) => setMemberId(value)}
        placeholder="Medlems-id"
        placeholderTextColor="white"
      />
      <Button color="white" title="Skapa konto" onPress={() => signUp()} />
    </MainView>
  );
};

export default SignUp;
