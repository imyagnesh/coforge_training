import Button from '@components/Button';
import React, {useState} from 'react';
import {View, Text} from 'react-native';
import FastImage from 'react-native-fast-image';
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  useAnimatedGestureHandler,
  withTiming,
  Easing,
  withSpring,
  interpolate,
  interpolateColor,
} from 'react-native-reanimated';
import {TapGestureHandler} from 'react-native-gesture-handler';

const AnimatedImage = Animated.createAnimatedComponent(FastImage);

interface Props {}

const Animate = (props: Props) => {
  const scale = useSharedValue(1);

  //   const animateBall = useAnimatedStyle(() => {
  //     return {
  //       transform: [
  //         {
  //           translateX: withSpring(translateX.value, {
  //             stiffness: 100,
  //             velocity: 20,
  //           }),
  //         },
  //         {
  //           translateY: withSpring(translateY.value, {
  //             stiffness: 100,
  //             velocity: 20,
  //           }),
  //         },
  //       ],
  //     };
  //   });

  const animateBall = useAnimatedStyle(() => {
    return {
      backgroundColor: interpolateColor(
        scale.value,
        [1, 1.1, 1.2, 1.3],
        ['red', 'blue', 'green', 'yellow'],
      ),
      transform: [
        {
          scale: withTiming(scale.value, {
            duration: 500,
          }),
        },
      ],
    };
  });

  const handleGestureEvent = useAnimatedGestureHandler({
    onStart: () => {
      scale.value = withTiming(1.3);
    },
    onEnd: () => {
      scale.value = 1;
    },
  });

  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <TapGestureHandler onGestureEvent={handleGestureEvent}>
        <Animated.View
          style={[
            {
              height: 100,
              width: 100,
              borderRadius: 50,
            },
            animateBall,
          ]}
        />
      </TapGestureHandler>

      {/* <AnimatedImage
        source={{
          uri: 'https://reactjs.org/logo-og.png',
        }}
        style={[
          {
            height: 200,
            width: 200,
          },
          animateImage,
        ]}
        resizeMode="contain"
      /> */}

      {/* <Button
        title="Move ball"
        onPress={() => {
          translateX.value = 200;
          translateY.value = 400;
        }}></Button>
      <Button
        title="Scale Image"
        onPress={() => {
          scale.value = 2;
        }}></Button> */}
    </View>
  );
};

export default Animate;
