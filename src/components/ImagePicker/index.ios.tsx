import React, {Component} from 'react';
import {Text, View, ActionSheetIOS} from 'react-native';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';
import {selectFromCamera, selectFromLib} from './imagePickerUtils';

export class ImagePicker extends Component {
  toggleImagePicker = () => {
    ActionSheetIOS.showActionSheetWithOptions(
      {
        options: ['Cancel', 'Take Photo', 'Choose from library'],
        cancelButtonIndex: 0,
        destructiveButtonIndex: 1,
      },
      buttonIndex => {
        const {onSelectImage} = this.props;
        if (buttonIndex === 1) {
          selectFromCamera(onSelectImage);
        }
        if (buttonIndex === 2) {
          selectFromLib(onSelectImage);
        }
      },
    );
  };

  render() {
    return null;
  }
}

export default ImagePicker;
