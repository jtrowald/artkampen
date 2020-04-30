import React from 'react';
import styled from 'styled-components';
import { useNewEntryContext } from '../../../context/NewEntryContext';

const ElevatedView = styled.View`
  background-color: rgba(240, 240, 245, ${({ inactive }) =>
    inactive ? '0.5' : '1'})
  margin: 10px;
  box-shadow: 6px 4px 10px rgba(0, 0, 0, 0.5);
  flex-direction: row;
`;

export const ElevatedCard = ({ children, step }) => {
  const { selectedImage, selectedFishIndex } = useNewEntryContext();
  const inactive =
    (step === 2 && selectedFishIndex === null) ||
    (step === 3 && selectedImage === null);
  return (
    <ElevatedView inactive={inactive} trunc>
      {children}
    </ElevatedView>
  );
};

export default ElevatedCard;
