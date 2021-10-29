import React from 'react';
import {View, FlatList, Image, Dimensions} from 'react-native';
import Animated from 'react-native-reanimated';
import TinderCard from './TinderCard';

const AnimatedFlatList = Animated.createAnimatedComponent(FlatList);

const assets = [
  {id: 1, image: require('../../../assets/images/card1.png')},
  {id: 2, image: require('../../../assets/images/card2.png')},
  {id: 3, image: require('../../../assets/images/card3.png')},
  {id: 4, image: require('../../../assets/images/card4.png')},
  {id: 5, image: require('../../../assets/images/card5.png')},
  {id: 6, image: require('../../../assets/images/card6.png')},
];

interface Props {}

const Swiper = (props: Props) => {
  const handleRenderItem = ({...rest}) => {
    return <TinderCard {...rest} />;
  };

  const handleKeyExtractor = x => `${x.id}`;
  return (
    <View style={{flex: 1}}>
      <AnimatedFlatList
        data={assets.reverse()}
        renderItem={handleRenderItem}
        keyExtractor={handleKeyExtractor}
        bounces={false}
        scrollEventThrottle={16}
      />
    </View>
  );
};

export default Swiper;
