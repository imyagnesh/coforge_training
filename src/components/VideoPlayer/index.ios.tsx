import React from 'react';
import {useWindowDimensions} from 'react-native';
import Video from 'react-native-video';

interface Props {}

const VideoPlayer = (props: Props) => {
  const {width: screenWidth} = useWindowDimensions();
  return (
    <Video
      source={{uri: 'https://www.w3schools.com/html/mov_bbb.mp4'}}
      resizeMode="cover"
      fullscreenOrientation="landscape"
      controls
      style={{
        width: screenWidth,
        height: screenWidth * (9 / 16),
        backgroundColor: '#000',
      }}
    />
  );
};

export default VideoPlayer;
