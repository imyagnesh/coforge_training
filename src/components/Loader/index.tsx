import {useTheme} from '@react-navigation/native';
import React from 'react';
import {View, Text, ActivityIndicator} from 'react-native';

interface Props {}

const Loader = (props: Props) => {
  const {colors} = useTheme();
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <ActivityIndicator size="large" animating color={colors.notification} />
    </View>
  );
};

export default Loader;
