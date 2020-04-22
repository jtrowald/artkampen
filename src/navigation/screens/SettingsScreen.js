import React from "react";
import styled from "styled-components";
import Auth from "@aws-amplify/auth";
import { TouchableOpacity, Alert } from "react-native";
import { useAppContext } from "../../context/AppContext";

const View = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

const Text = styled.Text``;

export const SettingsScreen = (props) => {
  const context = useAppContext();
  const signOutAlert = () => {
    Alert.alert(
      "Logga ut",
      "Är du säker på att du vill logga ut?",
      [
        {
          text: "Avbryt",
          onPress: () => console.log("Canceled"),
          style: "cancel",
        },
        // Calling signOut
        { text: "Logga ut", onPress: () => context.logout() },
      ],
      { cancelable: false }
    );
  };
  return (
    <View>
      <TouchableOpacity onPress={() => signOutAlert()}>
        <Text>Logga ut</Text>
      </TouchableOpacity>
    </View>
  );
};

export default SettingsScreen;
