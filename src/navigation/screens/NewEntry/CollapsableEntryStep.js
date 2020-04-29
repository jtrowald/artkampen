import React from 'react';
import styled from 'styled-components';

import Colors from '../../../constants/Colors';
import { getUniversalHeight, getUniversalWidth } from '../../../util/util';

const Wrapper = styled.View`
  display: flex;
  background-color: ${Colors.sfBlue};
  margin: 10px;
  justify-content: flex-start;
`;

const TopView = styled.View`
  flex-direction: column;
`;

const LineView = styled.View`
  border-top-width: 2px;
  border-top-color: white;
  margin-top: ${getUniversalHeight(20)}px;
  margin-bottom: ${getUniversalHeight(20)}px;
`;

const NumberView = styled.View`
  border-radius: 100px;
  border-color: white;
  border-width: 2px;
  width: ${getUniversalWidth(30)}px;
  height: ${getUniversalHeight(30)}px;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  background-color: ${Colors.sfBlue};
  position: absolute;
  top: ${getUniversalHeight(5)}px;
  left: ${getUniversalWidth(30)}px;
`;

const TextView = styled.View`
  border-radius: 100px;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  background-color: ${Colors.sfBlue};
  position: absolute;
  top: ${getUniversalHeight(10)}px;
  right: ${getUniversalWidth(30)}px;
  padding-horizontal: ${getUniversalWidth(10)}px;
`;

const Text = styled.Text`
  color: white;
  font-size: ${getUniversalHeight(18)}px;
`;

const ContentView = styled.View``;

const labels = ['Välj fisk', 'Välj bild', 'Ladda upp'];

export const CollapsableEntryStep = ({ step, children }) => {
  return (
    <Wrapper>
      <TopView>
        <LineView></LineView>
        <NumberView>
          <Text>{step}</Text>
        </NumberView>
        <TextView>
          <Text>{labels[step - 1]}</Text>
        </TextView>
      </TopView>
    </Wrapper>
  );
};

export default CollapsableEntryStep;
