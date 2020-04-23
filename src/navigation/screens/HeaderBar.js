import { EvilIcons } from "@expo/vector-icons";
import Colors from "../../constants/Colors";
import React from "react";
import { Text, TouchableOpacity } from "react-native";
import styled from "styled-components/native";
import { getUniversalHeight, getUniversalWidth } from "../../util/util";

const TopView = styled.View`
  flex-direction: row;
  height: ${getUniversalHeight(50)}px;
  justify-content: space-between;
  align-items: center;
  margin-horizontal: ${getUniversalWidth(10)}px;
  border-bottom-width: 2px;
  border-color: ${Colors.sfBlue};
`;

const TopLogo = styled.Image`
  width: ${getUniversalWidth(140)}px;
  height: ${getUniversalHeight(50)}px;
  resize-mode: contain;
`;

const DrawerButtonView = styled.TouchableOpacity``;

export const HeaderBar = (props) => {
  return (
    <TopView>
      <DrawerButtonView onPress={() => props.navigation.toggleDrawer()}>
        <EvilIcons name={"navicon"} size={40} />
      </DrawerButtonView>
      <TopLogo source={require("../../../assets/images/sf-logo.png")} />
      <Text>Hjälp</Text>
    </TopView>
  );
};

export default HeaderBar;
