import { useActionSheet } from '@expo/react-native-action-sheet';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import React, { useEffect, useState } from 'react';
import { Animated } from 'react-native';
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

const SelectButton = styled.TouchableOpacity`
  width: ${getUniversalWidth(200)}px;
`;

const SelectButtonView = styled.View`
  flex-direction: column;
  align-items: flex-start;
  margin: 10px;
`;

const Text = styled.Text`
  color: ${Colors.sfBlue};
`;

export const SelectFishView = () => {
  const {
    fishes,
    fishOptions,
    selectedFishIndex,
    setSelectedFishIndex,
  } = useNewEntryContext();
  const { showActionSheetWithOptions } = useActionSheet();
  const [selectLabelFontSize] = useState(new Animated.Value(18));
  const [selectedFishLabelFontSize] = useState(new Animated.Value(0));

  useEffect(() => {
    if (selectedFishIndex !== null) {
      Animated.parallel([
        Animated.timing(selectLabelFontSize, {
          toValue: 13,
          duration: 500,
        }),
        Animated.timing(selectedFishLabelFontSize, {
          toValue: 26,
          duration: 500,
        }),
      ]).start();
    } else {
      Animated.timing(selectLabelFontSize, {
        toValue: 18,
        duration: 500,
      }).start();
    }
  });

  const textHeight = selectedFishLabelFontSize.interpolate({
    inputRange: [0, 26],
    outputRange: [0, 100],
  });

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

  console.log('FISH', fishes[selectedFishIndex]?.name);
  return (
    <MainView>
      <SelectButton onPress={() => selectFish()}>
        <SelectButtonView>
          <Animated.Text
            style={{ color: Colors.sfBlue, fontSize: selectLabelFontSize }}
          >
            {selectedFishIndex !== null && fishes[selectedFishIndex]?.name
              ? 'Vald fisk'
              : 'Välj fisk'}
          </Animated.Text>
          <Text
            as={Animated.Text}
            style={[
              { fontSize: selectedFishLabelFontSize, maxHeight: textHeight },
            ]}
          >
            {(selectedFishIndex !== null && fishes[selectedFishIndex]?.name) ||
              ''}
          </Text>
        </SelectButtonView>
      </SelectButton>
    </MainView>
  );
};

export default SelectFishView;
