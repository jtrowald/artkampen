import React from 'react';
import styled from 'styled-components/native';
import Colors from '../../../constants/Colors';
import { HeaderBar } from '../HeaderBar';
import { SelectImageScreen } from './SelectImageScreen';
import { CollapsableEntryStep } from './CollapsableEntryStep';
import { UploadEntryButton } from './UploadEntryButton';
import { SelectFishView } from './SelectFishView';

import { NewEntryProvider } from '../../../context/NewEntryContext';

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

export const NewEntryScreen = (props) => {
  return (
    <NewEntryProvider>
      <Wrapper>
        <HeaderBar {...props} />
        <MainView>
          <CollapsableEntryStep step={1} />
          <SelectFishView />
          <CollapsableEntryStep step={2} />
          <SelectImageScreen />
          <CollapsableEntryStep step={3} />
          <UploadEntryButton />
        </MainView>
      </Wrapper>
    </NewEntryProvider>
  );
};

export default NewEntryScreen;
