import { EvilIcons, Entypo } from "@expo/vector-icons";
import Colors from "../../constants/Colors";
import React from "react";
import { Text, TouchableOpacity } from "react-native";
import styled from "styled-components/native";
import { getUniversalHeight, getUniversalWidth } from "../../util/util";
import HeaderBar from "./HeaderBar";
import Storage from "@aws-amplify/storage";
import { openImagePickerAsync } from "../../util/cameraUtil";

const Wrapper = styled.SafeAreaView`
  display: flex;
  flex: 1;
  flex-direction: column;
`;

const MainView = styled.View``;

const Buttons = styled.View`
  flex-direction: row;
  justify-content: space-evenly;
`;

const ButtonView = styled.View`
  height: ${getUniversalHeight(50)}px;
  background-color: ${Colors.sfBlue};
  border-radius: 10px;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

const ButtonText = styled.Text`
  margin-horizontal: 5px;
  margin-right: 10px;
  color: #fff;
`;
const StyledImage = styled.Image`
  width: 300px;
  height: ${getUniversalHeight(300)}px;
  resize-mode: contain;
`;

const Icon = styled(Entypo)`
  margin-horizontal: 5px;
  margin-left: 10px;
  color: white;
`;

export const UploadPhotoScreen = (props) => {
  const [selectedImage, setSelectedImage] = React.useState(null);

  const imageFromPicker = async () => {
    const image = await openImagePickerAsync();
    setSelectedImage(image);
  };

  const handleImagePicked = async () => {
    const imageName = selectedImage.uri.replace(/^.*[\\\/]/, "");
    const access = { level: "public", contentType: "image/jpeg" };
    const imageData = await fetch(selectedImage.uri);
    const blobData = await imageData.blob();

    try {
      await Storage.put(imageName, blobData, access);
    } catch (err) {
      console.log("error: ", err);
    }
  };

  return (
    <Wrapper>
      <HeaderBar {...props} />
      <MainView>
        <Buttons>
          <TouchableOpacity onPress={() => imageFromPicker()}>
            <ButtonView>
              <Icon name={"images"} size={20} />
              <ButtonText>Välj bild</ButtonText>
            </ButtonView>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => console.log("hej")}>
            <ButtonView>
              <Icon name={"camera"} size={20} />
              <ButtonText>Ta en bild</ButtonText>
            </ButtonView>
          </TouchableOpacity>
        </Buttons>
        <TouchableOpacity onPress={() => handleImagePicked()}>
          <ButtonView>
            <Icon name={"camera"} size={20} />
            <ButtonText>Ladda upp</ButtonText>
          </ButtonView>
        </TouchableOpacity>
        <StyledImage source={{ uri: selectedImage?.uri }} />
      </MainView>
    </Wrapper>
  );
};

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

export default UploadPhotoScreen;
