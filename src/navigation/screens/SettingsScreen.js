import React from "react";
import styled from "styled-components";
import Auth from "@aws-amplify/auth";

const View = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

const Text = styled.Text``;

export const SettingsScreen = () => {
  return (
    <View>
      <Text>ProfileScreen</Text>
    </View>
  );
};

export default SettingsScreen;
