import { EvilIcons, Entypo } from "@expo/vector-icons";
import Colors from "../../../constants/Colors";
import React, { useState } from "react";
import styled, { css } from "styled-components/native";
import { getUniversalHeight, getUniversalWidth } from "../../../util/util";
import HeaderBar from "../HeaderBar";
import Storage from "@aws-amplify/storage";
import { openImagePickerAsync } from "../../../util/cameraUtil";
import UploadPhotoScreen from "./UploadPhotoScreen";
import CollapsableEntryStep from "./CollapsableEntryStep";

const Wrapper = styled.SafeAreaView`
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: flex-start;
`;

const MainView = styled.View`
  background-color: ${Colors.sfBlue};
  flex: 1;
`;

const NavigateButtons = styled.View`
  flex-direction: row;
  justify-content: space-evenly;
`;

const buttonStyle = css`
  padding-horizontal: 20px;
  padding-vertical: 10px;
  border-radius: 5px;
`;

const PrevTouchableOpacity = styled.TouchableOpacity`
  ${buttonStyle}
  background-color: white;
`;

const NextTouchableOpacity = styled.TouchableOpacity`
${buttonStyle}
  background-color: ${Colors.successBackground};
`;

const PrevText = styled.Text`
  color: ${Colors.sfBlue};
`;

const NextText = styled.Text`
  color: white;
`;

export const NewEntryScreen = (props) => {
  const [entryStep, setEntryStep] = useState(1);

  return (
    <Wrapper>
      <HeaderBar {...props} />
      <MainView>
        <CollapsableEntryStep step={1}>
          <UploadPhotoScreen truncated={entryStep !== 1} />
        </CollapsableEntryStep>
        <CollapsableEntryStep step={2}></CollapsableEntryStep>

        <NavigateButtons>
          <PrevTouchableOpacity onPress={() => setEntryStep(entryStep - 1)}>
            <PrevText>Föregående steg</PrevText>
          </PrevTouchableOpacity>
          <NextTouchableOpacity onPress={() => setEntryStep(entryStep + 1)}>
            <NextText>Nästa steg</NextText>
          </NextTouchableOpacity>
        </NavigateButtons>
      </MainView>
    </Wrapper>
  );
};

export default NewEntryScreen;
