import React from 'react';
import {View, Text} from 'react-native';
import Slider from '@react-native-community/slider';
import Typography from '@components/Typography';
import intervalToDuration from 'date-fns/intervalToDuration';

interface Props {}

const Progressbar = ({
  currentTime,
  duration,
  onSlideCapture,
  onSlideStart,
  onSlideComplete,
}: Props) => {
  const handleOnSlide = time => {
    onSlideCapture({seekTime: time});
  };

  const position = intervalToDuration({start: 0, end: currentTime * 1000});
  const fullDuration = intervalToDuration({start: 0, end: duration * 1000});

  return (
    <View style={{flex: 1}}>
      <Slider
        value={currentTime}
        minimumValue={0}
        maximumValue={duration}
        step={1}
        onValueChange={handleOnSlide}
        onSlidingStart={onSlideStart}
        onSlidingComplete={onSlideComplete}
        minimumTrackTintColor="#F44336"
        maximumTrackTintColor="#fff"
        thumbTintColor="#F44336"
      />
      <View>
        <Typography variant="body3">{`${position.minutes}:${position.seconds}`}</Typography>
        <Typography variant="body3">{`${fullDuration.minutes}:${fullDuration.seconds}`}</Typography>
      </View>
    </View>
  );
};

export default Progressbar;
