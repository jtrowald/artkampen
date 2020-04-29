import { EvilIcons, Entypo } from "@expo/vector-icons";
import Colors from "../../../constants/Colors";
import React, { useState, useEffect } from "react";
import styled, { css } from "styled-components/native";
import { getUniversalHeight, getUniversalWidth } from "../../../util/util";
import HeaderBar from "../HeaderBar";
import Storage from "@aws-amplify/storage";
import { openImagePickerAsync } from "../../../util/cameraUtil";
import UploadPhotoScreen from "./UploadPhotoScreen";
import CollapsableEntryStep from "./CollapsableEntryStep";
import UploadEntryButton from "./UploadEntryButton";
import { SelectFishView } from "./SelectFishView";
import { formatDiagnosticsWithColorAndContext } from "typescript";

import { listFishs as ListFish } from "../../../graphql/queries";
import { API, graphqlOperation } from "aws-amplify";

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

export const NewEntryScreen = (props) => {
  const [selectedFishIndex, setSelectedFishIndex] = useState(null);
  const [selectedImage, setSelectedImage] = React.useState(null);
  const [fishes, setFishes] = useState([]);
  const [fishOptions, setFishOptions] = useState([]);

  useEffect(() => {
    getFishes();
  }, []);

  useEffect(() => {
    let fishArray = fishes.map((fish) => fish.name);
    fishArray.push("Avbryt");
    setFishOptions(fishArray);
  }, [fishes]);

  const getFishes = async () => {
    await API.graphql(graphqlOperation(ListFish))
      .then((result) => {
        setFishes(result?.data?.listFishs?.items);
      })
      .catch((err) => console.log("Error fetching fishes: ", err));
  };

  return (
    <Wrapper>
      <HeaderBar {...props} />
      <MainView>
        <CollapsableEntryStep step={1} />
        <SelectFishView
          fishOptions={fishOptions}
          selectedFishIndex={selectedFishIndex}
          setSelectedFishIndex={setSelectedFishIndex}
        />
        <CollapsableEntryStep step={2} />
        <UploadPhotoScreen
          selectedImage={selectedImage}
          setSelectedImage={setSelectedImage}
          truncated={selectedFishIndex === null}
        />
        <CollapsableEntryStep step={3} />
        <UploadEntryButton
          truncated={selectedImage === null}
          selectedFishIndex={selectedFishIndex}
          setSelectedFishIndex={setSelectedFishIndex}
          selectedImage={selectedImage}
          setSelectedImage={setSelectedImage}
        />
      </MainView>
    </Wrapper>
  );
};

export default NewEntryScreen;
