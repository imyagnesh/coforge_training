import Button from '@components/Button';
import Typography from '@components/Typography';
import React, {Component} from 'react';
import {
  Alert,
  Linking,
  PermissionsAndroid,
  Pressable,
  Text,
  View,
} from 'react-native';
import {gestureHandlerRootHOC, RectButton} from 'react-native-gesture-handler';
import Modal from 'react-native-modal';
import {selectFromCamera, selectFromLib} from './imagePickerUtils';

const ImagePickerModal = gestureHandlerRootHOC(
  ({colors, toggleImagePicker, onSelectImage}) => {
    const OnPress = async () => {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.CAMERA,
        {
          title: 'Cool Photo App Camera Permission',
          message:
            'Cool Photo App needs access to your camera ' +
            'so you can take awesome pictures.',
          buttonNeutral: 'Ask Me Later',
          buttonNegative: 'Cancel',
          buttonPositive: 'OK',
        },
      );
      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        selectFromCamera(onSelectImage);
      }
      if (granted === PermissionsAndroid.RESULTS.NEVER_ASK_AGAIN) {
        Alert.alert(
          'Camera Permission',
          'Please give permission to take your profile picture',
          [
            {
              text: 'Cancel',
              style: 'cancel',
            },
            {text: 'OK', onPress: () => Linking.openSettings()},
          ],
        );
      } else {
        console.warn('Camera permission denied');
      }
    };

    return (
      <>
        <View
          style={{
            padding: 8,
          }}>
          <Typography
            variant="body1"
            style={{
              color: colors.primary,
            }}>
            Please Select Image
          </Typography>
        </View>
        <RectButton
          onPress={OnPress}
          style={{
            padding: 8,
          }}>
          <Typography variant="body1">Take Photo</Typography>
        </RectButton>
        <RectButton
          onPress={() => {
            selectFromLib(onSelectImage);
          }}
          style={{
            padding: 8,
          }}>
          <Typography variant="body1">Choose from library</Typography>
        </RectButton>
        <RectButton
          style={{
            padding: 8,
          }}
          onPress={toggleImagePicker}>
          <Typography variant="body1">Cancel</Typography>
        </RectButton>
      </>
    );
  },
  {
    backgroundColor: '#fff',
    flex: 0,
  },
);

export class ImagePicker extends Component {
  state = {
    isVisible: false,
  };

  toggleImagePicker = () => {
    this.setState(({isVisible}) => {
      return {
        isVisible: !isVisible,
      };
    });
  };

  render() {
    const {isVisible} = this.state;
    const {colors, onSelectImage} = this.props;
    return (
      <Modal isVisible={isVisible}>
        <ImagePickerModal
          colors={colors}
          toggleImagePicker={this.toggleImagePicker}
          onSelectImage={onSelectImage}
        />
      </Modal>
    );
  }
}

export default ImagePicker;
