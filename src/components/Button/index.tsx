import Typography from '@components/Typography';
import React from 'react';
import {View, Text, TextProps} from 'react-native';
import {RectButton, RectButtonProps} from 'react-native-gesture-handler';
import useStyles from './useStyles';

interface Props extends RectButtonProps {
  textStyle?: TextProps['style'];
  title: string;
}

const Button = ({style, title, textStyle, ...rest}: Props) => {
  const styles = useStyles();
  return (
    <RectButton style={[styles.btn, style]} {...rest}>
      <View accessible accessibilityRole="button">
        <Typography style={[styles.btnText, textStyle]} variant="btn">
          {title}
        </Typography>
      </View>
    </RectButton>
  );
};

export default Button;
