import * as React from "react";
import { Text, View } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import styled from "styled-components/native";

import HeaderBar from "./HeaderBar";

const Wrapper = styled.SafeAreaView`
  display: flex;
  flex: 1;
  flex-direction: column;
`;

export const CompetitionScreen = (props) => {
  return (
    <Wrapper>
      <HeaderBar {...props} />
      <ScrollView>
        <View>
          <Text>Tävling</Text>
        </View>
      </ScrollView>
    </Wrapper>
  );
};

export default CompetitionScreen;
