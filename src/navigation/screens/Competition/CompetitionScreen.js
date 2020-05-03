import * as React from 'react';
import { Text, View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import styled from 'styled-components/native';

import { HeaderBar } from '../HeaderBar';
import { CompetitionProvider } from '../../../context/CompetitionContext';
import { CompetitionMainView } from './CompetitionMainView';

const Wrapper = styled.SafeAreaView`
  display: flex;
  flex: 1;
  flex-direction: column;
`;

export const CompetitionScreen = (props) => {
  return (
    <CompetitionProvider>
      <Wrapper>
        <HeaderBar {...props} />
        <CompetitionMainView />
      </Wrapper>
    </CompetitionProvider>
  );
};

export default CompetitionScreen;
