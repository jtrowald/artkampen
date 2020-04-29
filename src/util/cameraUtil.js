import * as ImagePicker from "expo-image-picker";
import moment from "moment";

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
    exif: true,
  });

  if (pickerResult.cancelled === true) {
    return;
  }

  moment.locale();
  const originalImageDate = moment().diff(
    moment(pickerResult?.exif?.DateTimeOriginal, "YYYY:MM:DD"),
    "years"
  );
  console.log("Is older than one year: ", originalImageDate > 1);

  return pickerResult;
};

//Camera
export const openCameraAsync = async () => {
  console.log("ENTER CAMERA");
  let permissionResult = await ImagePicker.requestCameraPermissionsAsync();

  if (permissionResult.granted === false) {
    alert("Permission to access camera is required!");
    return;
  }

  let pickerResult = await ImagePicker.launchCameraAsync({
    allowsEditing: true,
    aspect: [1, 1],
  });

  if (pickerResult.cancelled === true) {
    return;
  }

  return pickerResult;
};
