import React from 'react';
import styled from 'styled-components';

import Colors from '../../../constants/Colors';
import { getUniversalHeight, getUniversalWidth } from '../../../util/util';
import { MaterialCommunityIcons } from '@expo/vector-icons';

const Wrapper = styled.View`
  display: flex;
  margin: 10px;
  justify-content: center;
  border-right-width: 2px;
  border-right-color: ${Colors.sfBlue};
`;

const TopView = styled.View`
  flex-direction: row;
  align-items: center;
`;

const StyledIcon = styled(MaterialCommunityIcons)`
  color: ${Colors.sfBlue};
  margin-right: ${getUniversalWidth(10)}px;
`;

export const CollapsableEntryStep = ({ icon }) => {
  return (
    <Wrapper>
      <TopView>
        <StyledIcon name={icon} size={25} />
      </TopView>
    </Wrapper>
  );
};

export default CollapsableEntryStep;
