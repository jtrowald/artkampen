import React, { useEffect, useState } from 'react';
import { Animated } from 'react-native';
import styled from 'styled-components';
import { API, graphqlOperation } from 'aws-amplify';
import Storage from '@aws-amplify/storage';
import { useNavigation } from '@react-navigation/native';
import Colors from '../../../constants/Colors';
import { createContribution as CreateContribution } from '../../../graphql/mutations';
import { useNewEntryContext } from '../../../context/NewEntryContext';

const Text = styled.Text`
  color: white;
  padding: 10px;
`;
const TouchableOpacity = styled.TouchableOpacity`
  opacity: ${({ loading }) => (!loading ? 1 : 0.5)};

  flex-direction: row;
  justify-content: center;
`;

const View = styled.View``;

export const UploadEntryButton = () => {
  const { selectedImage, selectedFishIndex, fishes } = useNewEntryContext();
  const [loading, setLoading] = useState(false);
  const [opacityAnim] = useState(new Animated.Value(0));
  const navigation = useNavigation();
  const truncated = selectedFishIndex === null || selectedImage === null;
  console.log(selectedImage);
  useEffect(() => {
    navigation.navigate('LoadingModal', { loading });
  }, [loading]);

  React.useEffect(() => {
    if (!truncated) {
      Animated.timing(opacityAnim, {
        toValue: 1,
        duration: 500,
      }).start();
    } else {
      Animated.timing(opacityAnim, {
        toValue: 0,
        duration: 500,
      }).start();
    }
  });

  const handleImagePicked = async () => {
    setLoading(true);
    const imageName = selectedImage.uri.replace(/^.*[\\\/]/, '');
    const access = { level: 'public', contentType: 'image/jpeg' };
    const imageData = await fetch(selectedImage.uri);
    const blobData = await imageData.blob();
    try {
      const image = await Storage.put(imageName, blobData, access);
      console.log('IMAGE:', fishes[selectedFishIndex]?.Id);
      const newContribution = {
        contributionFishId: fishes[selectedFishIndex]?.Id,
        imageKey: image.key,
        accepted: 'false',
      };
      const createdContribution = await API.graphql(
        graphqlOperation(CreateContribution, { input: newContribution }),
      );
      console.log('CONTRIBUTION: ', createdContribution);
    } catch (err) {
      console.log('error: ', err);
    }
    setLoading(false);
  };

  return (
    <TouchableOpacity
      disabled={truncated}
      loading={loading}
      onPress={() => handleImagePicked()}
    >
      <Animated.View
        style={[
          {
            opacity: opacityAnim,
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: Colors.successBackground,
            width: 200,
            borderRadius: 5,
          },
        ]}
      >
        <Text>Ladda upp</Text>
      </Animated.View>
    </TouchableOpacity>
  );
};

export default UploadEntryButton;
