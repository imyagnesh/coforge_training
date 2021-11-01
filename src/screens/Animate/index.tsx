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
import {
  TapGestureHandler,
  PanGestureHandler,
} from 'react-native-gesture-handler';

const AnimatedImage = Animated.createAnimatedComponent(FastImage);

interface Props {}

const Animate = (props: Props) => {
  // const scale = useSharedValue(1);
  const pressed = useSharedValue(false);
  const translateX = useSharedValue(0);
  const translateY = useSharedValue(0);

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
      backgroundColor: pressed.value ? 'yellow' : 'red',
      transform: [
        {
          translateX: withSpring(translateX.value),
        },
        {
          translateY: withSpring(translateY.value),
        },
      ],
    };
  });

  // const handleGestureEvent = useAnimatedGestureHandler({
  //   onStart: () => {
  //     pressed.value = true;
  //   },
  //   onEnd: () => {
  //     pressed.value = false;
  //   },
  // });

  const panGestureEvent = useAnimatedGestureHandler({
    onStart: (event, data) => {
      pressed.value = true;
      data.x = translateX.value;
      data.y = translateY.value;
    },
    onActive: (event, data) => {
      translateX.value = data.x + event.translationX;
      translateY.value = data.y + event.translationY;
    },
    onEnd: (event, data) => {
      // translateX.value = 0;
      // translateY.value = 0;
      pressed.value = false;
    },
  });

  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      {/* <TapGestureHandler onGestureEvent={handleGestureEvent}> */}
      <PanGestureHandler onGestureEvent={panGestureEvent}>
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
      </PanGestureHandler>
      {/* </TapGestureHandler> */}

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
