import React, { useEffect, useState } from 'react';
import { Animated } from 'react-native';
import styled from 'styled-components';
import { API, Auth, graphqlOperation, Storage } from 'aws-amplify';
import { useNavigation } from '@react-navigation/native';
import Colors from '../../../constants/Colors';
import { createSubmission as CreateSubmission } from '../../../graphql/mutations';
import { useNewEntryContext } from '../../../context/NewEntryContext';
import config from '../../../../aws-exports';
import useAppContext from '../../../context/AppContext';

const Text = styled.Text`
  color: ${Colors.sfBlue};
  padding: 10px;
`;
const TouchableOpacity = styled.TouchableOpacity`
  opacity: ${({ loading }) => (!loading ? 1 : 0.5)};

  flex-direction: row;
  justify-content: center;
`;

export const UploadEntryButton = () => {
  const {
    selectedImage,
    selectedFishIndex,
    fishes,
    setShowSuccessModal,
  } = useNewEntryContext();
  const { authDBUser } = useAppContext();
  const [loading, setLoading] = useState(false);
  const [opacityAnim] = useState(new Animated.Value(0));
  const navigation = useNavigation();
  const truncated = selectedFishIndex === null || selectedImage === null;
  useEffect(() => {
    navigation.navigate('LoadingModal', { loading });
  }, [loading]);

  useEffect(() => {
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

  const uuid = () => {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, (c) => {
      var r = (Math.random() * 16) | 0,
        v = c == 'x' ? r : (r & 0x3) | 0x8;
      return v.toString(16);
    });
  };

  const handleImagePicked = async () => {
    setLoading(true);

    const {
      aws_user_files_s3_bucket_region: region,
      aws_user_files_s3_bucket: bucket,
    } = config;

    const imageData = await fetch(selectedImage.uri);
    const blobData = await imageData.blob();
    const fileName = selectedImage.uri.replace(/^.*[\\\/]/, '');
    const key = `${uuid()}${fileName}`;
    const user = await Auth.currentAuthenticatedUser();
    const fileForUpload = {
      bucket,
      key,
      region,
    };
    console.log(authDBUser.id);
    const newSubmission = {
      submissionFishId: fishes[selectedFishIndex]?.id,
      accepted: 'false',
      image: fileForUpload,
      submissionUserId: authDBUser?.id,
    };

    await Storage.put(key, blobData, {
      contentType: 'image/jpeg',
      metadata: {
        owner: user.username,
      },
    })
      .then(async () => {
        await API.graphql(
          graphqlOperation(CreateSubmission, { input: newSubmission }),
        )
          .then(() => {
            setShowSuccessModal(true);
          })
          .catch((err) => console.log('Error creating sumbission', err));
      })
      .catch((err) => console.log('Error uploading photo', err));

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
            borderColor: Colors.sfBlue,
            borderWidth: 2,
            width: 280,
            borderRadius: 5,
            margin: 10,
          },
        ]}
      >
        <Text>Ladda upp</Text>
      </Animated.View>
    </TouchableOpacity>
  );
};

export default UploadEntryButton;
