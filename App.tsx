import Input from '@components/Input';
import Button from '@components/Button';
import useTheme from '@hooks/useTheme';
import React from 'react';
import {
  SafeAreaView,
  View,
  TouchableHighlight,
  TouchableNativeFeedback,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Pressable,
} from 'react-native';
import {RectButton} from 'react-native-gesture-handler';
import {moderateScale} from 'react-native-size-matters';
import Typography from './src/components/Typography';

interface Props {}

const App = (props: Props) => {
  const theme = useTheme();
  return (
    <SafeAreaView style={{flex: 1}}>
      <Typography
        variant="h1"
        allowFontScaling={true}
        numberOfLines={1}
        maxFontSizeMultiplier={1.2}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore,
        officia!
      </Typography>
      <View style={{marginHorizontal: moderateScale(10)}}>
        <Input placeholder="Username" />
        <Input placeholder="Password" />
        <Button title="Login" />
      </View>
      {/* <Button title="Login" /> */}
      {/* <TouchableHighlight
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
      </TouchableOpacity> */}

      {/* <TouchableWithoutFeedback onPress={() => {}}>
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
      </TouchableWithoutFeedback> */}

      {/* <TouchableNativeFeedback onPress={() => {}}>
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
      </Pressable> */}
    </SafeAreaView>
  );
};

export default App;

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
