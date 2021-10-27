import Typography from '@components/Typography';
import {useTheme} from '@react-navigation/native';
import React from 'react';
import {View, Text} from 'react-native';

interface Props {}

const Ratting = ({ratting: {rate}}: Props) => {
  const {colors} = useTheme();
  return (
    <View style={{flexDirection: 'row', alignItems: 'center'}}>
      <View style={{flexDirection: 'row', marginRight: 4}}>
        {[...Array(5).keys()].map((x, index) => {
          let Icon = require('@assets/icons/star.svg').default;
          if (Math.round(rate) <= index) {
            Icon = require('@assets/icons/star_outline.svg').default;
          }

          return (
            <Icon key={x} height={24} width={24} fill={colors.notification} />
          );
        })}
      </View>
      <Typography variant="inlineError">{rate}</Typography>
    </View>
  );
};

export default Ratting;
