import {useTheme} from '@react-navigation/native';
import React from 'react';
import {View, Text} from 'react-native';
import {
  BorderlessButton,
  BorderlessButtonProps,
} from 'react-native-gesture-handler';
import {SvgProps} from 'react-native-svg';

interface Props extends BorderlessButtonProps {
  component: React.FC<SvgProps>;
}

const IconButton = ({component: Icon, ...rest}: Props) => {
  const {colors} = useTheme();
  return (
    <BorderlessButton
      {...rest}
      // style={styles.rightIconStyle}
    >
      <View accessible accessibilityRole="button">
        <Icon height={24} width={24} fill={colors.primary} />
      </View>
    </BorderlessButton>
  );
};

export default IconButton;
