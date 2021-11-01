import React from 'react';
import {View, FlatList} from 'react-native';
import Animated, {
  useAnimatedScrollHandler,
  useSharedValue,
} from 'react-native-reanimated';
import Card from './Card';
const AnimatedFlatList = Animated.createAnimatedComponent(FlatList);

const assets = [
  require('../../../assets/images/card1.png'),
  require('../../../assets/images/card2.png'),
  require('../../../assets/images/card3.png'),
  require('../../../assets/images/card4.png'),
  require('../../../assets/images/card5.png'),
  require('../../../assets/images/card6.png'),
];

interface Props {}

const ScrollAnimation = (props: Props) => {
  const translationY = useSharedValue(0);

  const handleRenderItem = ({item, index}) => {
    return <Card item={item} index={index} y={translationY} />;
  };

  const handleKeyExrtractor = (item, index) => `item-${index}`;

  const handleOnScroll = useAnimatedScrollHandler(event => {
    translationY.value = event.contentOffset.y;
  });

  return (
    <View>
      <AnimatedFlatList
        scrollEventThrottle={16}
        bounces={false}
        data={assets}
        onScroll={handleOnScroll}
        renderItem={handleRenderItem}
        keyExtractor={handleKeyExrtractor}
      />
    </View>
  );
};

export default ScrollAnimation;
