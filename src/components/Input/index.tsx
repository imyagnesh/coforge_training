import Typography from '@components/Typography';
import React from 'react';
import {View, TextInput, TextInputProps} from 'react-native';
import {moderateScale} from 'react-native-size-matters';
import useStyles from './useStyles';

interface Props extends TextInputProps {
  error?: string;
}

const Input = ({style, error, ...rest}: Props) => {
  const styles = useStyles(error);
  return (
    <View style={{marginVertical: moderateScale(10)}}>
      <TextInput style={[styles.input, style]} {...rest} />
      {!!error && <Typography variant="inlineError">{error}</Typography>}
    </View>
  );
};

export default Input;
