import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { Text } from 'react-native';
import { useCompetitionContext } from '../../../context/CompetitionContext';
import { useAppContext } from '../../../context/AppContext';

const ElevatedView = styled.View`
  background-color: rgba(240, 240, 245, ${({ inactive }) =>
    inactive ? '0.5' : '1'})
  margin: 10px;
  box-shadow: 6px 4px 10px rgba(0, 0, 0, 0.5);
  flex-direction: row;
`;

export const CompetitionCell = ({ user, position }) => {
  // async function fetchImage(key) {
  //   try {
  //     const imageData = await Storage.get(key)
  //     updateAvatarUrl(imageData)
  //   } catch(err) {
  //     console.log('error: ', err)
  //   }
  // }

  console.log(user);
  return (
    <ElevatedView>
      <Text>{position}</Text>
      <Text>{user.username}</Text>
    </ElevatedView>
  );
};

ElevatedView.propTypes = {
  children: PropTypes.node.isRequired,
  step: PropTypes.number,
};

export default CompetitionCell;
