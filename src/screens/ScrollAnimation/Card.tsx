import React from 'react';
import {Image, Dimensions, StyleSheet, useWindowDimensions} from 'react-native';
import Animated, {
  useAnimatedStyle,
  Extrapolate,
  interpolate,
  useDerivedValue,
} from 'react-native-reanimated';

const {width: screenWidth} = Dimensions.get('screen');

const ratio = 228 / 362;

const CARD_WIDTH = screenWidth * 0.8;
const CARD_HEIGHT = CARD_WIDTH * ratio;

const styles = StyleSheet.create({
  cardWrapper: {
    marginVertical: 16,
    alignSelf: 'center',
  },
  card: {
    height: CARD_HEIGHT,
    width: CARD_WIDTH,
  },
});

interface Props {}

const Card = ({item, index, y}: Props) => {
  const {height: screenHeight} = useWindowDimensions();
  const isBottom = screenHeight - CARD_HEIGHT;
  const isAppearing = screenHeight;

  const position = useDerivedValue(() => {
    return index * CARD_HEIGHT - y.value;
  }, [y, index]);

  const inter1 = interpolate(
    y.value,
    [0, 0.0001 + index * CARD_HEIGHT],
    [0, -index * CARD_HEIGHT],
    {
      extrapolateRight: Extrapolate.CLAMP,
    },
  );

  const inter2 = interpolate(
    position.value,
    [isBottom, isAppearing],
    [0, -CARD_HEIGHT / 4],
  );

  const translateY = useDerivedValue(() => {
    return y.value + inter1 + inter2;
  }, [y, inter1, inter2]).value;

  const animatedStyle = useAnimatedStyle(() => {
    const isDisappearing = -CARD_HEIGHT;
    const isTop = 0;

    return {
      opacity: interpolate(
        position.value,
        [isDisappearing, isTop, isBottom, isAppearing],
        [0.5, 1, 1, 0.5],
      ),
      transform: [
        {
          scale: interpolate(
            position.value,
            [isDisappearing, isTop, isBottom, isAppearing],
            [0.5, 1, 1, 0.5],
          ),
        },
        {
          translateY,
        },
      ],
    };
  }, [y, index, position, translateY]);

  return (
    <Animated.View style={[styles.cardWrapper, animatedStyle]}>
      <Image source={item} style={styles.card} />
    </Animated.View>
  );
};

export default Card;
