import {launchCamera, launchImageLibrary} from 'react-native-image-picker';

export const selectFromCamera = onSelectImage => {
  launchCamera(
    {
      mediaType: 'photo',
      cameraType: 'front',
      maxHeight: 100,
      maxWidth: 100,
    },
    onSelectImage,
  );
};

export const selectFromLib = onSelectImage => {
  launchImageLibrary(
    {
      mediaType: 'photo',
      quality: 0.6,
      selectionLimit: 1,
    },
    onSelectImage,
  );
};
