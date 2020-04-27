import * as ImagePicker from "expo-image-picker";

//Image picker
export const openImagePickerAsync = async () => {
  let permissionResult = await ImagePicker.requestCameraRollPermissionsAsync();

  if (permissionResult.granted === false) {
    alert("Permission to access camera roll is required!");
    return;
  }

  let pickerResult = await ImagePicker.launchImageLibraryAsync({
    allowsEditing: true,
    aspect: [1, 1],
  });

  if (pickerResult.cancelled === true) {
    return;
  }

  return pickerResult;
};
