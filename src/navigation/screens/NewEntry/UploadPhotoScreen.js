import { EvilIcons, Entypo } from "@expo/vector-icons";
import Colors from "../../../constants/Colors";
import React, { useState, useEffect } from "react";
import { Text, TouchableOpacity, Animated } from "react-native";
import styled from "styled-components/native";
import { getUniversalHeight, getUniversalWidth } from "../../../util/util";
import Storage from "@aws-amplify/storage";
import { openImagePickerAsync } from "../../../util/cameraUtil";

const Wrapper = styled.SafeAreaView`
  display: flex;
  flex-direction: column
  align-items: center;
`;

const ImageView = styled.View`
  width: ${getUniversalWidth(300)}px;
  height: ${getUniversalHeight(300)}px;
  border-color: white;
  border-width: 2px;
  border-radius: 5px;
  border-style: dashed;
  padding: 2px;
  margin-vertical: ${getUniversalHeight(10)}px;
`;

const StyledImage = styled.Image`
  resize-mode: contain;
  border-radius: 5px;
  flex: 1;
`;

const ButtonView = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;

const Button = styled.View`
  height: ${getUniversalHeight(50)}px;
  background-color: ${Colors.sfBlue};
  border-radius: 10px;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

const ButtonText = styled.Text`
  margin-horizontal: ${getUniversalWidth(5)}px;
  margin-right: ${getUniversalWidth(15)}px;
  color: #fff;
`;

const Icon = styled(Entypo)`
  margin-horizontal: ${getUniversalWidth(5)}px;
  margin-left: ${getUniversalWidth(15)}px;
  color: white;
`;

export const UploadPhotoScreen = ({ truncated }) => {
  const [selectedImage, setSelectedImage] = React.useState(null);
  const [maxHeightAnim] = useState(new Animated.Value(truncated ? 0 : 10000));

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

  React.useEffect(() => {
    if (!truncated) {
      Animated.timing(maxHeightAnim, {
        toValue: 10000,
        duration: 500,
      }).start();
    } else {
      Animated.timing(maxHeightAnim, {
        toValue: 0,
        duration: 500,
      }).start();
    }
  });

  console.log(maxHeightAnim);

  return (
    <Wrapper as={Animated.View} style={{ maxHeight: maxHeightAnim }}>
      <ImageView>
        <StyledImage source={{ uri: selectedImage?.uri }} />
      </ImageView>
      <ButtonView>
        <TouchableOpacity onPress={() => imageFromPicker()}>
          <Button>
            <Icon name={"images"} size={20} />
            <ButtonText>Välj bild</ButtonText>
          </Button>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => console.log("hej")}>
          <Button>
            <Icon name={"camera"} size={20} />
            <ButtonText>Ta en bild</ButtonText>
          </Button>
        </TouchableOpacity>
      </ButtonView>
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
