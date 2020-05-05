import React, { useState } from 'react';
import { TouchableOpacity, Button, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import styled from 'styled-components';
import { useAppContext } from '../../context/AppContext';

const StyledInput = styled.TextInput`
  height: 50px;
  border-bottom-width: 3px;
  border-bottom-color: white;
  margin: 20px;
  color: white;
`;

const Text = styled.Text`
  font-size: 12px;
  padding: 10px;
  color: white;
`;

const ButtonView = styled.View`
  flex-direction: row;
  justify-content: space-evenly;
`;

const MainView = styled.View`
  background-color: #0090d2;
  flex: 1;
`;

export const SignIn = (props) => {
  const [username, setUserName] = useState();
  const [password, setPassword] = useState();
  const navigation = useNavigation();
  // const [email, setEmail] = useState();
  // const [memberId, setMemberId] = useState();
  // const [user, setUser] = useState();
  const context = useAppContext();
  const signIn = () => {
    context.signIn(username, password);
  };
  return (
    <MainView>
      <StyledInput
        onChangeText={(value) => setUserName(value)}
        placeholder="Användarnamn"
        placeholderTextColor="white"
        autoCompleteType="username"
      />
      <StyledInput
        onChangeText={(value) => setPassword(value)}
        placeholder="Lösenord"
        secureTextEntry
        placeholderTextColor="white"
        autoCompleteType="password"
      />
      <ButtonView>
        <TouchableOpacity onPress={() => navigation.navigate('SignUp')}>
          <Text>Skapa konto</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('ForgotPassword')}>
          <Text>Glömt lösenord?</Text>
        </TouchableOpacity>
      </ButtonView>
      <Button color="white" title="Logga in" onPress={() => signIn()} />
    </MainView>
  );
};

export default SignIn;
