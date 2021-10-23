import Input from '@components/Input';
import Button from '@components/Button';
import useTheme from '@hooks/useTheme';
import React, {useRef} from 'react';
import {
  View,
  ImageBackground,
  TextInput,
  KeyboardAvoidingView,
} from 'react-native';
import {moderateScale} from 'react-native-size-matters';
import Typography from '@components/Typography';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {useHeaderHeight} from '@react-navigation/elements';
import {RootStackParamList} from 'src/types/RootStackParams';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

interface Props extends NativeStackScreenProps<RootStackParamList, 'Login'> {}

const Register = ({navigation}: Props) => {
  const theme = useTheme();
  const headerHeight = useHeaderHeight();
  const {top} = useSafeAreaInsets();
  const passwordRef = useRef<TextInput>();

  return (
    <ImageBackground
      source={require('../../../assets/images/background.jpg')}
      resizeMode="cover"
      style={{
        flex: 1,
      }}>
      <KeyboardAvoidingView style={{flex: 1}} behavior="padding">
        <View
          style={{
            marginHorizontal: moderateScale(10),
            marginTop: top,
          }}>
          <Typography
            variant="h1"
            style={{
              textAlign: 'center',
            }}
            allowFontScaling={true}
            numberOfLines={1}
            maxFontSizeMultiplier={1.2}>
            Register
          </Typography>
          <Input
            placeholder="First Name"
            returnKeyType="next"
            autoComplete="name-given"
            textContentType="givenName"
            onSubmitEditing={() => {
              passwordRef.current?.focus();
            }}
          />
          <Input
            placeholder="Last Name"
            returnKeyType="next"
            autoComplete="name-family"
            textContentType="familyName"
            onSubmitEditing={() => {
              passwordRef.current?.focus();
            }}
          />
          <Input
            placeholder="Username"
            keyboardType="email-address"
            returnKeyType="next"
            autoComplete="email"
            textContentType="emailAddress"
            onSubmitEditing={() => {
              passwordRef.current?.focus();
            }}
          />
          <Input
            ref={passwordRef}
            placeholder="Password"
            autoComplete="password-new"
            textContentType="password"
            returnKeyType="go"
            secureTextEntry
          />
          <Input
            ref={passwordRef}
            placeholder="Confirm Password"
            autoComplete="password-new"
            textContentType="password"
            returnKeyType="go"
            secureTextEntry
          />
          <Button title="Login" />
        </View>
      </KeyboardAvoidingView>
    </ImageBackground>
  );
};

export default Register;
