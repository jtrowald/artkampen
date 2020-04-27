import React, { useState } from "react";
import styled from "styled-components";
import Amplify, { API, graphqlOperation } from "aws-amplify";
import {} from "react-native";
import { useAppContext } from "../../context/AppContext";

import config from "../../../aws-exports";
import { createFish } from "../../graphql/mutations";

Amplify.configure(config);

const View = styled.View`
  flex: 1;
  background-color: #fff;
  padding-horizontal: 10px;
  padding-top: 50px;
`;

const TextInput = styled.TextInput`
  height: 50px;
  border-bottom-width: 2px;
  border-bottom-color: blue;
  margin-vertical: 10px;
`;

const TouchableOpacity = styled.TouchableOpacity`
  background-color: #34495e;
  margin-top: 10px;
  margin-bottom: 10px;
  padding: 10px;
  border-radius: 5px;
  align-items: center;
`;

const Text = styled.Text`
  color: #fff;
  font-size: 24px;
`;

const DescView = styled.View`
  background-color: blue;
`;

export const DevScreen = (props) => {
  const [fish, setFish] = useState({ name: null, description: null });
  const [allFishes, setAllFishes] = useState([]);

  const addFish = async (event) => {
    const input = { name: fish.name, description: fish.description };
    const result = await API.graphql(graphqlOperation(createFish, { input }));
    const newFish = result.data.createFish;
    const updatedFishes = [...allFishes, newFish];
    setAllFishes(updatedFishes);
  };

  console.log(allFishes);
  return (
    <View>
      <TextInput
        value={fish.name}
        onChangeText={(val) => setFish({ ...fish, name: val })}
        placeholder="Fiskens namn"
      />
      <TextInput
        value={fish.description}
        onChangeText={(val) => setFish({ ...fish, description: val })}
        placeholder="Beskrivning"
      />
      <TouchableOpacity onPress={() => addFish()}>
        <Text>Add +</Text>
      </TouchableOpacity>
      <DescView>
        {allFishes.map((fishObj) => (
          <Text>{`fisk: ${fishObj.name} som är en ${fishObj.description}`}</Text>
        ))}
      </DescView>
    </View>
  );
};

//setAllFishes([...allFishes, { name: fish.name, desc: fish.desc }])add

export default DevScreen;
