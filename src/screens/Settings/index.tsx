import ImagePicker from '@components/ImagePicker';
import {useTheme} from '@react-navigation/native';
import React, {useRef, useState} from 'react';
import {View, Text, Alert, Platform} from 'react-native';
import FastImage from 'react-native-fast-image';
import {BorderlessButton} from 'react-native-gesture-handler';

interface Props {}

const Settings = (props: Props) => {
  const imagePickerRef = useRef(null);
  const {colors} = useTheme();
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <View style={{flex: 1}}>
      <BorderlessButton
        style={{
          height: 100,
          width: 100,
          alignSelf: 'center',
          marginTop: 20,
        }}
        onPress={() => {
          imagePickerRef.current.toggleImagePicker();
        }}>
        {!!selectedImage?.assets ? (
          <FastImage
            source={{
              uri: selectedImage.assets[0].uri,
            }}
            style={{
              height: 100,
              width: 100,
              borderRadius: 50,
            }}
            resizeMode="cover"
          />
        ) : (
          <View
            style={{
              height: 100,
              width: 100,
              backgroundColor: '#4A4A4A',
              borderRadius: 50,
            }}
          />
        )}
      </BorderlessButton>
      <ImagePicker
        ref={imagePickerRef}
        colors={colors}
        onSelectImage={data => {
          setSelectedImage(data);
          if (Platform.OS === 'android') {
            imagePickerRef.current.toggleImagePicker();
          }
        }}
      />
    </View>
  );
};

export default Settings;
