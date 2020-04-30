import React, { useState } from 'react';
import styled from 'styled-components/native';
import Colors from '../../../constants/Colors';
import { getUniversalHeight, getUniversalWidth } from '../../../util/util';

import { useNewEntryContext } from '../../../context/NewEntryContext';

const TouchableOpacity = styled.TouchableOpacity`
  display: flex;
  flex: 1;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
`;

const MainView = styled.View`
  position: absolute;
  flex: 1;
  background-color: ${Colors.sfBlue};
  margin: 10px;
  top: 0px;
  bottom: 0px;
  left: 0px;
  right: 0px;
`;

const TitleText = styled.Text`
color: white;
margin: 10px;
text-align: center;
font-size: 20px
font-weight: 300;
z-index: 11;
`;

const BoldText = styled.Text`
color: white;
margin: 10px;
text-align: center;
font-size: 25px
font-weight: 500;
margin-top: 30px;
z-index: 11;
`;

const BreadText = styled.Text`
  color: white;
  text-align: center;
  margin: 10px;
  font-size: 16px;
  font-weight: 400;
`;

const ImageView = styled.View`
  width: ${getUniversalWidth(300)}px;
  height: ${({ height }) => height}px;
  border-color: white;
  border-width: 2px;
  border-radius: 5px;
  padding: 2px;
  margin-vertical: ${getUniversalHeight(10)}px;
`;

const StyledImage = styled.Image`
  resize-mode: cover;
  border-radius: 5px;
  flex: 1;
`;

const OverlayView = styled.View`
  position: absolute;
  display: flex;
  top: ${getUniversalHeight(50)}px;
  bottom: ${getUniversalHeight(30)}px;
  left: ${getUniversalWidth(30)}px;
  right: ${getUniversalWidth(30)}px;
  z-index: 1;
  background-color: white;
  box-shadow: 6px 4px 10px rgba(0, 0, 0, 0.5);
`;

const ButtonView = styled.View`
  width: ${getUniversalWidth(300)}px;
  height: ${getUniversalHeight(50)}px;
  background-color: ${Colors.successBackground};
  justify-content: center;
  align-items: center;
  border-radius: 5px;
  position: absolute;
  bottom: ${getUniversalHeight(20)}px;
`;

const Text = styled.Text`
  color: white;
`;

export const SuccessOverlay = () => {
  const {
    selectedFishIndex,
    setSelectedFishIndex,
    selectedImage,
    setSelectedImage,
    fishes,
    showSuccessModal,
    setShowSuccessModal,
  } = useNewEntryContext();

  const resetAllEntryData = () => {
    setSelectedFishIndex(null);
    setSelectedImage(null);
    setShowSuccessModal(false);
  };

  const presentedRatio = getUniversalWidth(300) / selectedImage?.width;
  const height = presentedRatio * selectedImage?.height;

  if (showSuccessModal) {
    return (
      <OverlayView>
        <MainView>
          <TouchableOpacity onPress={() => resetAllEntryData()}>
            <BoldText>{fishes[selectedFishIndex]?.name}</BoldText>
            <ImageView height={height}>
              <StyledImage source={{ uri: selectedImage?.uri }} />
            </ImageView>
            <TitleText>Ditt bidrag har laddats upp!</TitleText>
            <BreadText>
              Du blir meddelad via [någonting] när bidraget har godkänts.
            </BreadText>
            <ButtonView>
              <Text>Stäng</Text>
            </ButtonView>
          </TouchableOpacity>
        </MainView>
      </OverlayView>
    );
  } else {
    return null;
  }
};

export default SuccessOverlay;
