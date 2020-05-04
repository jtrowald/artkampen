import React, { useEffect, useState } from 'react';
import { API, graphqlOperation } from 'aws-amplify';
import PropTypes from 'prop-types';

export const CompetitionContext = React.createContext();
export const CompetitionConsumer = CompetitionContext.Consumer;

export const useCompetitionContext = () => React.useContext(CompetitionContext);

export const CompetitionProvider = ({ children }) => {
  const [users, setUsers] = useState(null);

  const getUsers = async () => {
    // await API.graphql(graphqlOperation(test))
    //   .then((result) => {
    //     setUsers(result?.data?.listUsers?.items);
    //   })
    //   .catch((err) => console.log('Error fetching users: ', err));
  };

  useEffect(() => {
    getUsers();
  }, []);

  return (
    <CompetitionContext.Provider value={{ users }}>
      {children}
    </CompetitionContext.Provider>
  );
};

CompetitionProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default useCompetitionContext;
