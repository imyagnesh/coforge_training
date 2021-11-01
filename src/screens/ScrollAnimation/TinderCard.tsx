import React from 'react';
import {Image, useWindowDimensions} from 'react-native';
import {PanGestureHandler} from 'react-native-gesture-handler';
import Animated, {
  useAnimatedGestureHandler,
  useAnimatedStyle,
  useSharedValue,
  withSpring,
} from 'react-native-reanimated';

interface Props {}

const TinderCard = ({item, index}: Props) => {
  const translateX = useSharedValue(0);
  const translateY = useSharedValue(0);
  const {width: screenWidth} = useWindowDimensions();

  const ratio = 228 / 362;

  const CARD_WIDTH = screenWidth * 0.8;
  const CARD_HEIGHT = CARD_WIDTH * ratio;

  const handleOnGestureEvent = useAnimatedGestureHandler({
    onStart: () => {},
    onActive: event => {
      translateX.value = event.translationX;
      translateY.value = event.translationY;
    },
    onEnd: () => {
      translateX.value = withSpring(0);
      translateY.value = withSpring(0);
    },
  });

  const animatedStylec = useAnimatedStyle(() => {
    return {
      transform: [
        {
          translateX: translateX.value,
        },
        {
          translateY: translateY.value,
        },
      ],
    };
  });

  return (
    <PanGestureHandler onGestureEvent={handleOnGestureEvent}>
      <Animated.View
        style={[
          {
            position: 'absolute',
            top: index * 5 + 30,
            zIndex: index + 1,
            left: (screenWidth - CARD_WIDTH) / 2,
          },
          animatedStylec,
        ]}>
        <Image
          source={item.image}
          style={{
            height: CARD_HEIGHT,
            width: CARD_WIDTH,
          }}
        />
      </Animated.View>
    </PanGestureHandler>
  );
};

export default TinderCard;
