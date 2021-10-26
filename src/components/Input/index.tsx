import IconButton from '@components/IconButton';
import Typography from '@components/Typography';
import {useTheme} from '@react-navigation/native';
import React, {useState, forwardRef} from 'react';
import {View, TextInput, TextInputProps, Alert, Pressable} from 'react-native';
import {
  BorderlessButton,
  BorderlessButtonProps,
  gestureHandlerRootHOC,
} from 'react-native-gesture-handler';
import {moderateScale} from 'react-native-size-matters';
import VisibilityIcon from '../../../assets/icons/visibility.svg';
import VisibilityOffIcon from '../../../assets/icons/visibility_off.svg';
import useStyles from './useStyles';

interface Props extends TextInputProps {
  error?: string;
  name: string;
}

interface RightIconProps extends BorderlessButtonProps {
  isPasswordVisible: boolean;
}

const RightIcon = gestureHandlerRootHOC(
  ({isPasswordVisible, ...rest}: RightIconProps) => {
    const styles = useStyles();
    const {colors} = useTheme();
    const IconProps = {
      height: 24,
      width: 24,
      fill: colors.primary,
    };
    return (
      <BorderlessButton
        {...rest}
        // style={styles.rightIconStyle}
      >
        <View accessible accessibilityRole="button">
          {isPasswordVisible ? (
            <VisibilityIcon {...IconProps} />
          ) : (
            <VisibilityOffIcon {...IconProps} />
          )}
        </View>
      </BorderlessButton>
    );
  },
  {
    flex: 0,
    position: 'absolute',
    top: 0,
    right: 0,
    paddingHorizontal: moderateScale(10),
    height: moderateScale(44, 0.3),
    justifyContent: 'center',
  },
);

const Input = ({
  field: {name, value}, // { name, value, onChange, onBlur }
  form: {touched, errors, handleChange, handleBlur}, // also values, setXXXX, handleXXXX, dirty, isValid, status, etc.
  style,
  innerRef,
  secureTextEntry,
  ...rest
}: Props) => {
  const error = touched[name] && errors[name];
  const styles = useStyles(error);
  const [isPasswordVisible, setIsPasswordVisible] = useState<boolean>(false);

  return (
    <View style={{marginVertical: moderateScale(10)}}>
      <TextInput
        ref={innerRef}
        value={value}
        onChangeText={handleChange(name)}
        onBlur={handleBlur(name)}
        style={[styles.input, style]}
        secureTextEntry={secureTextEntry && !isPasswordVisible}
        {...rest}
      />
      {!!error && <Typography variant="inlineError">{error}</Typography>}
      {!!secureTextEntry && (
        <RightIcon
          isPasswordVisible={isPasswordVisible}
          onPress={() => setIsPasswordVisible(val => !val)}
        />
      )}
    </View>
  );
};
export default Input;
