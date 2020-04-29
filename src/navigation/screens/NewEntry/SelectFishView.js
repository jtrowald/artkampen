import { useActionSheet } from '@expo/react-native-action-sheet';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import React from 'react';
import styled from 'styled-components';

import Colors from '../../../constants/Colors';
import { getUniversalWidth } from '../../../util/util';
import { useNewEntryContext } from '../../../context/NewEntryContext';

const MainView = styled.View`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const SelectButton = styled.TouchableOpacity``;

const SelectButtonView = styled.View`
  border-width: 1px;
  border-color: white;
  border-radius: 5px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: ${getUniversalWidth(250)}px;
  background-color: ${Colors.sfBlue}
  box-shadow: 6px 4px 10px rgba(0,0,0,0.5);
  margin-bottom: 5px;
`;

const Text = styled.Text`
  color: white;
  font-size: 18px;
  margin-vertical: ${getUniversalWidth(20)}px;
  margin-horizontal: ${getUniversalWidth(20)}px;
`;

const StyledIcon = styled(MaterialCommunityIcons)`
  color: white;
  margin-right: ${getUniversalWidth(10)}px;
`;

export const SelectFishView = () => {
  const {
    fishes,
    fishOptions,
    selectedFishIndex,
    setSelectedFishIndex,
  } = useNewEntryContext();
  const { showActionSheetWithOptions } = useActionSheet();

  const selectFish = () => {
    const cancelButtonIndex = fishOptions.length - 1;
    showActionSheetWithOptions(
      {
        options: fishOptions,
        cancelButtonIndex,
      },
      (buttonIndex) => {
        if (buttonIndex !== cancelButtonIndex) {
          setSelectedFishIndex(buttonIndex);
        }
      },
    );
  };
  console.log(fishes[selectedFishIndex]?.name);
  return (
    <MainView>
      <SelectButton onPress={() => selectFish()}>
        <SelectButtonView>
          <Text>
            {(selectedFishIndex !== null && fishes[selectedFishIndex]?.name) ||
              'Välj fisk'}
          </Text>
          <StyledIcon name="fish" size={25} />
        </SelectButtonView>
      </SelectButton>
    </MainView>
  );
};

export default SelectFishView;
