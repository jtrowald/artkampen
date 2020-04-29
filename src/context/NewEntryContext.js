//Context for the App

import React, { useEffect, useState } from 'react';
import { API, graphqlOperation } from 'aws-amplify';
import PropTypes from 'prop-types';

import { getUser as GetUser, listFishs as ListFish } from '../graphql/queries';

export const NewEntryContext = React.createContext();
export const NewEntryConsumer = NewEntryContext.Consumer;

export const useNewEntryContext = () => React.useContext(NewEntryContext);

export const NewEntryProvider = ({ children }) => {
  const [selectedFishIndex, setSelectedFishIndex] = useState(null);
  const [selectedImage, setSelectedImage] = React.useState(null);
  const [fishes, setFishes] = useState([]);
  const [fishOptions, setFishOptions] = useState([]);

  const getFishes = async () => {
    await API.graphql(graphqlOperation(ListFish))
      .then((result) => {
        setFishes(result?.data?.listFishs?.items);
      })
      .catch((err) => console.log('Error fetching fishes: ', err));
  };

  useEffect(() => {
    getFishes();
  }, []);

  useEffect(() => {
    const fishArray = fishes.map((fish) => fish.name);
    fishArray.push('Avbryt');
    setFishOptions(fishArray);
  }, [fishes]);

  return (
    <NewEntryContext.Provider
      value={{
        selectedFishIndex,
        setSelectedFishIndex,
        selectedImage,
        setSelectedImage,
        fishes,
        fishOptions,
        setFishOptions,
      }}
    >
      {children}
    </NewEntryContext.Provider>
  );
};

NewEntryProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default useNewEntryContext;
