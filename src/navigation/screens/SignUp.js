import React, { useState } from 'react';
import { Text } from 'react-native';

import styled from 'styled-components';
import { useAppContext } from '../../context/AppContext';
import SignUpOverlay from './signUp/SignUpOverlay';

const StyledInput = styled.TextInput`
  height: 50px;
  border-bottom-width: 3px;
  border-bottom-color: white;
  margin: 20px;
  color: white;
`;

const MainView = styled.View`
  background-color: #0090d2;
  flex: 1;
`;

const Button = styled.Button`
  color: white;
`;

const WarningText = styled.Text`
  color: #ff9999;
  font-size: 11px;
  margin-left: 20px;
`;

const ConfirmView = styled.View``;

export const SignUp = () => {
  const [name, setName] = useState();
  const [username, setUserName] = useState();
  const [password, setPassword] = useState();
  const [memberId, setMemberId] = useState();
  const [confirmCode, setConfirmCode] = useState();
  const [emailValidation, setEmailValidation] = useState(true);
  const [passwordValidation, setPasswordValidation] = useState(true);
  const [showCode, setShowCode] = useState(false);

  const {
    signUpErrors,
    signUp,
    confirmSignUp,
    isAuthenticated,
  } = useAppContext();

  const signUpPressed = async () => {
    signUp(username, password, memberId, name);
    setShowCode(true);
  };

  const confirmSignUpPressed = async () => {
    confirmSignUp(username, confirmCode);
  };

  const validateEmail = (email) => {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    setEmailValidation(re.test(String(email).toLowerCase()));
  };

  const validatePassword = () => {
    setPasswordValidation(password?.length >= 8);
  };

  const buttonDisabled =
    !name ||
    !username ||
    !password ||
    !memberId ||
    !emailValidation ||
    !passwordValidation;

  const errorMessage = (error) => {
    switch (error.code) {
      case 'UsernameExistsException':
        return 'Användarnamnet är redan registrerat';

      default:
        return signUpErrors.code;
    }
  };

  return (
    <MainView>
      <SignUpOverlay />
      <WarningText>{signUpErrors && errorMessage(signUpErrors)}</WarningText>
      <StyledInput
        onChangeText={(value) => setName(value)}
        placeholder="För- och efternamn"
        placeholderTextColor="white"
        autoCompleteType="name"
      />
      <StyledInput
        onChangeText={(value) => setUserName(value)}
        placeholder="Email"
        placeholderTextColor="white"
        autoCompleteType="email"
        onBlur={() => validateEmail(username)}
      />

      <StyledInput
        onChangeText={(value) => setPassword(value)}
        placeholder="Lösenord"
        placeholderTextColor="white"
        secureTextEntry
        autoCompleteType="password"
        onBlur={() => validatePassword()}
      />
      <WarningText>
        {!passwordValidation && 'Måste vara minst 8 bokstäver eller siffror'}
      </WarningText>
      <StyledInput
        onChangeText={(value) => setMemberId(value)}
        placeholder="Medlems-id"
        placeholderTextColor="white"
      />
      <Button
        disabled={buttonDisabled}
        color={buttonDisabled ? 'grey' : 'white'}
        title="Skapa konto"
        onPress={() => signUpPressed()}
      />
      {showCode && !isAuthenticated && (
        <ConfirmView>
          <Text>Skriv in koden som du fått till mailen</Text>
          <StyledInput
            onChangeText={(value) => setConfirmCode(value)}
            placeholder="Kod"
            placeholderTextColor="white"
          />
          <Button
            color="white"
            title="Skicka"
            onPress={() => confirmSignUpPressed()}
          />
        </ConfirmView>
      )}
    </MainView>
  );
};

export default SignUp;
