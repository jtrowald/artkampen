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

const ConfirmationText = styled.Text`
  font-size: 19px;
  padding: 10px;
  color: white;
  align-self: center;
`;

const ButtonView = styled.View`
  flex-direction: row;
  justify-content: space-evenly;
`;

const MainView = styled.View`
  background-color: #0090d2;
  flex: 1;
`;

const ConfirmationTouchableOpacity = styled.TouchableOpacity`
  flex-direction: row;
  justify-content: center;
`;

const ConfirmationView = styled.View`
  border-top-width: 1px;
  border-color: white;
  margin: 10px;
`;

export const SignIn = (props) => {
  const [username, setUserName] = useState();
  const [password, setPassword] = useState();
  const [confirmationCode, setConfirmationCode] = useState();
  const navigation = useNavigation();
  // const [email, setEmail] = useState();
  // const [memberId, setMemberId] = useState();
  // const [user, setUser] = useState();
  const {
    signIn,
    confirmSignUp,
    signInErrors,
    resendConfirmationCode,
  } = useAppContext();
  const signInPressed = () => {
    signIn(username, password);
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
      <Button color="white" title="Logga in" onPress={() => signInPressed()} />
      {signInErrors && signInErrors === 'UserNotConfirmedException' && (
        <ConfirmationView>
          <ConfirmationText>Användaren är inte bekräftad</ConfirmationText>
          <StyledInput
            onChangeText={(value) => setConfirmationCode(value)}
            placeholder="Kod"
            placeholderTextColor="white"
          />
          <Button
            color="white"
            title="Bekräfta email"
            onPress={() => confirmSignUp(username, confirmationCode)}
          />
          <ConfirmationTouchableOpacity
            onPress={() => resendConfirmationCode(username)}
          >
            <Text>Skicka kod igen</Text>
          </ConfirmationTouchableOpacity>
        </ConfirmationView>
      )}
    </MainView>
  );
};

export default SignIn;
