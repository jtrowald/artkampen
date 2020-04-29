import React, { useEffect } from "react";
import { Image } from "react-native";
import styled from "styled-components";
import { useNavigation, useRoute } from "@react-navigation/native";

const Text = styled.Text`
  font-size: 23px;
  padding: 10px;
  color: white;
`;

const TouchableOpacity = styled.TouchableOpacity`
  padding: 20px;
`;

const Wrapper = styled.View`
  flex: 1;
  background-color: transparent;
  align-items: center;
  justify-content: center;
`;

export const LoadingModal = () => {
  const navigation = useNavigation();
  const route = useRoute();
  console.log("Fish loading: ", route);

  useEffect(() => {
    if (!route.params.loading) {
      navigation.goBack();
    }
  }, [route.params]);

  return (
    <Wrapper>
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <Image
          style={{ opacity: 0.5 }}
          source={require("../../assets/images/loading_fish.gif")}
        />
      </TouchableOpacity>
    </Wrapper>
  );
};

export default LoadingModal;
