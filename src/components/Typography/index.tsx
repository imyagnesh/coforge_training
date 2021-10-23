import React from 'react';
import {Text, TextProps, useColorScheme} from 'react-native';
import styles from './styles';

interface Props extends TextProps {
  variant: string;
}

const Typography = ({variant, ...rest}: Props) => {
  const scheme = useColorScheme();
  return (
    <Text
      style={[
        styles[variant],
        {
          color: scheme === 'dark' ? '#fff' : '#000',
        },
      ]}
      allowFontScaling={true}
      maxFontSizeMultiplier={1.2}
      {...rest}
    />
  );
};

export default Typography;
