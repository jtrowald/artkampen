import React, { useState, useEffect } from "react";
import { Animated } from "react-native";
import styled from "styled-components";
import Colors from "../../../constants/Colors";
import { API, graphqlOperation } from "aws-amplify";
import Storage from "@aws-amplify/storage";
import { createFish as CreateFish } from "../../../graphql/mutations";
import { createContribution as CreateContribution } from "../../../graphql/mutations";
import { useNavigation, useRoute } from "@react-navigation/native";

const Text = styled.Text`
  color: white;
`;
const TouchableOpacity = styled.TouchableOpacity`
  opacity: ${({ loading }) => (!loading ? 1 : 0.5)};
  background-color: ${Colors.successBackground};
  width: 200px;
  height: 50px;
  justify-content: center;
  align-items: center;
`;

const View = styled.View`
  flex-direction: row;
  justify-content: center;
`;

export const UploadEntryButton = ({ selectedImage, selectedFish }) => {
  const [loading, setLoading] = useState(false);
  const navigation = useNavigation();
  const route = useRoute();

  useEffect(() => {
    navigation.navigate("LoadingModal", { loading: loading });
  }, [loading]);

  console.log(route);
  const handleImagePicked = async () => {
    setLoading(true);
    const imageName = selectedImage.uri.replace(/^.*[\\\/]/, "");
    const access = { level: "public", contentType: "image/jpeg" };
    const imageData = await fetch(selectedImage.uri);
    const blobData = await imageData.blob();

    try {
      const image = await Storage.put(imageName, blobData, access);
      console.log("IMAGE:", image);
      const newContribution = {
        contributionFishId: "2995d8bb-a3e8-4ce4-8b75-829e209e7f97",
        imageKey: image.key,
        accepted: "false",
      };
      const createdContribution = await API.graphql(
        graphqlOperation(CreateContribution, { input: newContribution })
      );
      console.log("CONTRIBUTION: ", createdContribution);
    } catch (err) {
      console.log("error: ", err);
    }
    setLoading(false);
  };

  return (
    <View>
      <TouchableOpacity
        disabled={loading}
        loading={loading}
        onPress={() => handleImagePicked()}
      >
        <Text>Ladda upp</Text>
      </TouchableOpacity>
      <TouchableOpacity
        disabled={loading}
        loading={loading}
        onPress={() => setLoading(true)}
      >
        <Text>Laddningsruta upp</Text>
      </TouchableOpacity>
    </View>
  );
};

export default UploadEntryButton;
