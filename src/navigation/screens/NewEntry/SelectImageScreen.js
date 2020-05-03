import { Entypo } from '@expo/vector-icons';
import React, { useState } from 'react';
import { Animated } from 'react-native';
import styled from 'styled-components/native';

import Colors from '../../../constants/Colors';
import { getUniversalHeight, getUniversalWidth } from '../../../util/util';
import {
  openCameraAsync,
  openImagePickerAsync,
} from '../../../util/cameraUtil';
import { useNewEntryContext } from '../../../context/NewEntryContext';

const MainView = styled.View`
  display: flex;
  flex-direction: column
  align-items: center;
`;

const ImageView = styled.View`
  width: ${getUniversalWidth(280)}px;
  border-color: #b2ddf1;
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

const TouchableOpacity = styled.TouchableOpacity`
  border-radius: 10px;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 10px;
`;

const ButtonText = styled.Text`
  margin-horizontal: ${getUniversalWidth(5)}px;
  margin-right: ${getUniversalWidth(15)}px;
  color: ${Colors.sfBlue};
`;

const Icon = styled(Entypo)`
  margin-horizontal: ${getUniversalWidth(5)}px;
  margin-left: ${getUniversalWidth(15)}px;
  color: ${Colors.sfBlue};
`;

const Text = styled.Text`
  margin-top: 5px;
  margin-left: 10px;
  align-self: flex-start;
  color: ${Colors.sfBlue};
`;

const noPicImage = require('../../../../assets/images/noPicSelected.png');

export const SelectImageScreen = () => {
  const {
    selectedFishIndex,
    selectedImage,
    setSelectedImage,
  } = useNewEntryContext();
  const truncated = selectedFishIndex === null;
  const [maxHeightAnim] = useState(new Animated.Value(truncated ? 0 : 10000));
  const imageFromPicker = async () => {
    const image = await openImagePickerAsync();
    setSelectedImage(image);
  };

  const imageFromCamera = async () => {
    const image = await openCameraAsync();
    setSelectedImage(image);
  };

  React.useEffect(() => {
    if (!truncated) {
      Animated.timing(maxHeightAnim, {
        toValue: 5000,
        duration: 500,
      }).start();
    } else {
      Animated.timing(maxHeightAnim, {
        toValue: 0,
        duration: 500,
      }).start();
    }
  });
  // <Wrapper as={Animated.View} style={{ maxHeight: maxHeightAnim }}>

  const imageHeight = maxHeightAnim.interpolate({
    inputRange: [0, 5000],
    outputRange: [0, getUniversalWidth(280)],
  });

  const componentsOpacity = maxHeightAnim.interpolate({
    inputRange: [0, 5000],
    outputRange: [0, 1],
  });

  return (
    <MainView as={Animated.View} style={{ maxHeight: maxHeightAnim }}>
      <Text>Välj bild</Text>
      <ImageView
        as={Animated.View}
        style={{ height: imageHeight, opacity: componentsOpacity }}
      >
        <StyledImage
          source={
            selectedImage !== null ? { uri: selectedImage?.uri } : noPicImage
          }
        />
      </ImageView>
      <ButtonView as={Animated.View} style={{ opacity: componentsOpacity }}>
        <TouchableOpacity onPress={() => imageFromPicker()}>
          <Icon name="images" size={20} />
          <ButtonText>Välj bild</ButtonText>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => imageFromCamera()}>
          <Icon name="camera" size={20} />
          <ButtonText>Ta en bild</ButtonText>
        </TouchableOpacity>
      </ButtonView>
    </MainView>
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

export default SelectImageScreen;
