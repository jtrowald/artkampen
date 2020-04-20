import * as WebBrowser from "expo-web-browser";
import React, { useState } from "react";
import {
  Image,
  Platform,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import * as ImagePicker from "expo-image-picker";
import styled from "styled-components/native";

const MainView = styled.View`
  display: flex;
  flex: 1;
  align-items: center;
  background-color: #fff;
  justify-content: center;
`;
const ButtonView = styled.View`
  height: 50px;
  width: 300px;
  background-color: blue;
  border-radius: 10px;
  margin: 30px;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

const ButtonText = styled.Text`
  color: #fff;
`;
const StyledImage = styled.Image`
  width: 300px;
  height: 300px;
  resize-mode: contain;
`;

let openImagePickerAsync = async () => {
  let permissionResult = await ImagePicker.requestCameraRollPermissionsAsync();

  if (permissionResult.granted === false) {
    alert("Permission to access camera roll is required!");
    return;
  }

  let pickerResult = await ImagePicker.launchImageLibraryAsync();

  if (pickerResult.cancelled === true) {
    return;
  }

  setSelectedImage({ localUri: pickerResult.uri });
};

export const UploadPhotoScreen = (props) => {
  console.log(props);
  const [selectedImage, setSelectedImage] = React.useState(null);
  let openImagePickerAsync = async () => {
    let permissionResult = await ImagePicker.requestCameraRollPermissionsAsync();

    if (permissionResult.granted === false) {
      alert("Permission to access camera roll is required!");
      return;
    }

    let pickerResult = await ImagePicker.launchImageLibraryAsync();

    if (pickerResult.cancelled === true) {
      return;
    }
    console.log(selectedImage);

    setSelectedImage({ localUri: pickerResult.uri });
  };

  return (
    <MainView>
      <TouchableOpacity onPress={() => openImagePickerAsync()}>
        <ButtonView>
          <ButtonText>Ladda upp en bild!</ButtonText>
        </ButtonView>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => props.navigation.toggleDrawer()}>
        <ButtonView>
          <ButtonText>Toggle drawer</ButtonText>
        </ButtonView>
      </TouchableOpacity>
      <StyledImage source={{ uri: selectedImage?.localUri }} />
    </MainView>
  );
};

// HomeScreen.navigationOptionRs = {
//   header: null,
// };

function DevelopmentModeNotice() {
  if (__DEV__) {
    const learnMoreButton = (
      <Text onPress={handleLearnMorePress}>Learn more</Text>
    );

    return (
      <Text>
        Development mode is enabled: your app will be slower but you can use
        useful development tools. {learnMoreButton}
      </Text>
    );
  } else {
    return (
      <Text>
        You are not in development mode: your app will run at full speed.
      </Text>
    );
  }
}

function handleLearnMorePress() {
  WebBrowser.openBrowserAsync(
    "https://docs.expo.io/versions/latest/workflow/development-mode/"
  );
}

function handleHelpPress() {
  WebBrowser.openBrowserAsync(
    "https://docs.expo.io/versions/latest/get-started/create-a-new-app/#making-your-first-change"
  );
}

export default UploadPhotoScreen;
