import React from "react";
import { StyleSheet, View, TouchableOpacity } from "react-native";
import styled from "styled-components";

const Wrapper = styled.View`
  flex: 1;
  background-color: #0090d2;
  align-items: center;
  justify-content: center;
`;

const Text = styled.Text`
  font-size: 23px;
  padding: 10px;
  color: white;
`;

export const ForgotPassword = () => {
  return (
    <Wrapper>
      <Text>Glömt lösen?</Text>
    </Wrapper>
  );
};

export default ForgotPassword;
