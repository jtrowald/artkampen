////COMPETITIONMAINVIEW
import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import _ from 'lodash';
import { FlatList } from 'react-native';
import { useCompetitionContext } from '../../../context/CompetitionContext';
import { useAppContext } from '../../../context/AppContext';
import { CompetitionCell } from './CompetitionCell';

const ElevatedView = styled.View`
  background-color: rgba(240, 240, 245, ${({ inactive }) =>
    inactive ? '0.5' : '1'})
  margin: 10px;
  box-shadow: 6px 4px 10px rgba(0, 0, 0, 0.5);
  flex-direction: row;
`;

export const CompetitionMainView = () => {
  const { users } = useCompetitionContext();
  const sortedUsers = _.sortBy(users, (user) => user.submissions.items.length);
  return (
    <FlatList
      data={sortedUsers}
      renderItem={({ item, index }) => (
        <CompetitionCell user={item} position={index} />
      )}
      keyExtractor={(user) => user.username}
    />
  );
};

ElevatedView.propTypes = {
  children: PropTypes.node.isRequired,
  step: PropTypes.number,
};

export default CompetitionMainView;
