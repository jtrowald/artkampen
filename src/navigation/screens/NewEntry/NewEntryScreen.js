import React from 'react';
import styled from 'styled-components/native';
import Colors from '../../../constants/Colors';
import { HeaderBar } from '../HeaderBar';
import { SelectImageScreen } from './SelectImageScreen';
import { CollapsableEntryStep } from './CollapsableEntryStep';
import { UploadEntryButton } from './UploadEntryButton';
import { SelectFishView } from './SelectFishView';

import { NewEntryProvider } from '../../../context/NewEntryContext';
import { SuccessOverlay } from './SuccessOverlay';
import { ElevatedCard } from './ElevatedCard';

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

export const NewEntryScreen = (props) => (
  <NewEntryProvider>
    <Wrapper>
      <SuccessOverlay />
      <HeaderBar {...props} />
      <MainView>
        <ElevatedCard step={1}>
          <CollapsableEntryStep icon={'fish'} />
          <SelectFishView />
        </ElevatedCard>
        <ElevatedCard step={2}>
          <CollapsableEntryStep icon={'image'} />
          <SelectImageScreen />
        </ElevatedCard>
        <ElevatedCard step={3}>
          <CollapsableEntryStep icon={'progress-upload'} />
          <UploadEntryButton />
        </ElevatedCard>
      </MainView>
    </Wrapper>
  </NewEntryProvider>
);

export default NewEntryScreen;
