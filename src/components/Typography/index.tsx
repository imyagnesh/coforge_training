import React from 'react';
import {Text, TextProps, useColorScheme} from 'react-native';
import useStyles from './useStyles';

interface Props extends TextProps {
  variant:
    | 'h1'
    | 'h2'
    | 'body1'
    | 'body2'
    | 'body3'
    | 'caption'
    | 'btn'
    | 'inlineError'
    | 'error';
}

const Typography = ({
  variant,
  style,
  allowFontScaling,
  maxFontSizeMultiplier,
  ...rest
}: Props) => {
  const styles = useStyles();
  return (
    <Text
      style={[styles[variant], style]}
      allowFontScaling={allowFontScaling || true}
      maxFontSizeMultiplier={maxFontSizeMultiplier || 1.2}
      {...rest}
    />
  );
};

export default Typography;
