import Input from '@components/Input';
import Button from '@components/Button';
import useTheme from '@hooks/useTheme';
import React, {useEffect, useRef, useState} from 'react';
import {
  View,
  useWindowDimensions,
  ImageBackground,
  TextInput,
  KeyboardAvoidingView,
  Keyboard,
  Alert,
} from 'react-native';
import {moderateScale} from 'react-native-size-matters';
import Typography from '@components/Typography';
import FastImage from 'react-native-fast-image';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParamList} from 'src/types/RootStackParams';
import {SafeAreaView} from 'react-native-safe-area-context';
import {Formik, Field} from 'formik';
import Checkbox from '@components/ Checkbox';
import {initialValues, loginFields, LoginFormValues} from './fields';
import Form from '@components/Form';
import {connect} from 'react-redux';

interface Props extends NativeStackScreenProps<RootStackParamList, 'Login'> {}

const Login = ({navigation, xyz, loadUser}: Props) => {
  console.warn('users', xyz);

  const theme = useTheme();
  const passwordRef = useRef<TextInput>();

  const {width: screenWidth} = useWindowDimensions();
  const [isKeyboardVisible, setIsKeyboardVisible] = useState(false);

  useEffect(() => {
    loadUser({id: 1, name: 'yagnesh modh', gender: 'male'});
    return () => {};
  }, []);

  useEffect(() => {
    const keyboardDidShow = Keyboard.addListener('keyboardDidShow', () => {
      setIsKeyboardVisible(true);
    });
    const keyboardDidHide = Keyboard.addListener('keyboardDidHide', () => {
      setIsKeyboardVisible(false);
    });
    return () => {
      keyboardDidShow.remove();
      keyboardDidHide.remove();
    };
  }, []);

  return (
    <ImageBackground
      source={require('../../../assets/images/background.jpg')}
      resizeMode="cover"
      style={{
        flex: 1,
      }}>
      <SafeAreaView style={{flex: 1}} edges={['bottom']}>
        <KeyboardAvoidingView style={{flex: 1}} behavior="padding">
          <View style={{flex: 1, justifyContent: 'center'}}>
            {!isKeyboardVisible && (
              <FastImage
                source={{
                  uri: 'https://reactjs.org/logo-og.png',
                  priority: FastImage.priority.high,
                }}
                style={{
                  height: moderateScale(100),
                  width: screenWidth * 0.4,
                  alignSelf: 'center',
                  marginVertical: moderateScale(10),
                }}
              />
            )}
          </View>

          <View style={{marginHorizontal: moderateScale(10)}}>
            <Typography
              variant="h1"
              style={{
                textAlign: 'center',
              }}
              allowFontScaling={true}
              numberOfLines={1}
              maxFontSizeMultiplier={1.2}>
              Login
            </Typography>
            <Form
              fields={loginFields}
              btnProps={{
                title: 'Login',
              }}
              initialValues={initialValues}
              onSubmit={values => {
                console.warn(values);
                navigation.reset({
                  index: 0,
                  routes: [{name: 'Main'}],
                });
              }}
            />
            <Typography
              variant="body3"
              style={{
                textAlign: 'center',
                paddingVertical: 10,
              }}>
              Don't have an account?{' '}
              <Typography
                onPress={() => navigation.navigate('Register')}
                variant="body2"
                style={{
                  color: theme.primary,
                  fontWeight: '700',
                }}>
                Sign Up
              </Typography>
            </Typography>
          </View>
        </KeyboardAvoidingView>
      </SafeAreaView>
    </ImageBackground>
  );
};

const mapStateToProps = state => {
  return {
    xyz: state.user,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    loadUser: payload => {
      dispatch({
        type: 'LOAD_USER_SUCCESS',
        payload,
      });
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);

/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

// import React from 'react';
// import {
//   SafeAreaView,
//   ScrollView,
//   StatusBar,
//   StyleSheet,
//   Text,
//   useColorScheme,
//   View,
// } from 'react-native';

// import {
//   Colors,
//   DebugInstructions,
//   Header,
//   LearnMoreLinks,
//   ReloadInstructions,
// } from 'react-native/Libraries/NewAppScreen';

// const Section: React.FC<{
//   title: string;
// }> = ({children, title}) => {
//   const isDarkMode = useColorScheme() === 'dark';
//   return (
//     <View style={styles.sectionContainer}>
//       <Text
//         style={[
//           styles.sectionTitle,
//           {
//             color: isDarkMode ? Colors.white : Colors.black,
//           },
//         ]}>
//         {title}
//       </Text>
//       <Text
//         style={[
//           styles.sectionDescription,
//           {
//             color: isDarkMode ? Colors.light : Colors.dark,
//           },
//         ]}>
//         {children}
//       </Text>
//     </View>
//   );
// };

// const App = () => {
//   const isDarkMode = useColorScheme() === 'dark';

//   const backgroundStyle = {
//     backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
//   };

//   return (
//     <SafeAreaView style={backgroundStyle}>
//       <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
//       <ScrollView
//         contentInsetAdjustmentBehavior="automatic"
//         style={backgroundStyle}>
//         <Header />
//         <View
//           style={{
//             backgroundColor: isDarkMode ? Colors.black : Colors.white,
//           }}>
//           <Section title="Step One">
//             Edit <Text style={styles.highlight}>App.tsx</Text> to change this
//             screen and then come back to see your edits.
//           </Section>
//           <Section title="See Your Changes">
//             <ReloadInstructions />
//           </Section>
//           <Section title="Debug">
//             <DebugInstructions />
//           </Section>
//           <Section title="Learn More">
//             Read the docs to discover what to do next:
//           </Section>
//           <LearnMoreLinks />
//         </View>
//       </ScrollView>
//     </SafeAreaView>
//   );
// };

// const styles = StyleSheet.create({
//   sectionContainer: {
//     marginTop: 32,
//     paddingHorizontal: 24,
//   },
//   sectionTitle: {
//     fontSize: 24,
//     fontWeight: '600',
//   },
//   sectionDescription: {
//     marginTop: 8,
//     fontSize: 18,
//     fontWeight: '400',
//   },
//   highlight: {
//     fontWeight: '700',
//   },
// });

// export default App;

{
  /* <Button title="Login" />
        <TouchableHighlight
        onPress={() => {}}
        style={{
          margin: moderateScale(10),
          borderRadius: moderateScale(4),
        }}>
        <View
          style={{
            height: moderateScale(44),
            backgroundColor: theme.primary,
            justifyContent: 'center',
            alignItems: 'center',
            borderRadius: moderateScale(4),
          }}>
          <Typography variant="btn">Login</Typography>
        </View>
      </TouchableHighlight>
      <TouchableOpacity
        activeOpacity={0.8}
        onPress={() => {}}
        style={{
          margin: moderateScale(10),
          borderRadius: moderateScale(4),
        }}>
        <View
          style={{
            height: moderateScale(44),
            backgroundColor: theme.primary,
            justifyContent: 'center',
            alignItems: 'center',
            borderRadius: moderateScale(4),
          }}>
          <Typography variant="btn">Login</Typography>
        </View>
      </TouchableOpacity>

        <TouchableWithoutFeedback onPress={() => {}}>
          <View
            style={{
              margin: moderateScale(10),
              height: moderateScale(44),
              backgroundColor: theme.primary,
              justifyContent: 'center',
              alignItems: 'center',
              borderRadius: moderateScale(4),
            }}>
            <Typography variant="btn">Login</Typography>
          </View>
        </TouchableWithoutFeedback>

        <TouchableNativeFeedback onPress={() => {}}>
          <View
            style={{
              margin: moderateScale(10),
              borderRadius: moderateScale(4),
              height: moderateScale(44),
              backgroundColor: theme.primary,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Typography variant="btn">Login</Typography>
          </View>
        </TouchableNativeFeedback>
        <Pressable
          style={{
            margin: moderateScale(10),
            borderRadius: moderateScale(4),
            height: moderateScale(44),
            backgroundColor: theme.primary,
            justifyContent: 'center',
            alignItems: 'center',
          }}
          android_ripple={{
            color: 'red',
          }}
          onPress={() => {}}>
          <Typography variant="btn">Login</Typography>
        </Pressable> */
}
