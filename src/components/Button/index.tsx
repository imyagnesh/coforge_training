import Typography from '@components/Typography';
import React from 'react';
import {View, Text, TextProps} from 'react-native';
import {RectButton, RectButtonProps} from 'react-native-gesture-handler';
import useStyles from './useStyles';

export interface ButtonProps extends RectButtonProps {
  textStyle?: TextProps['style'];
  title: string;
  disable: boolean;
}

const Button = ({style, title, disable, textStyle, ...rest}: ButtonProps) => {
  const styles = useStyles(disable);
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
