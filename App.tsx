import React from 'react';
import {
  NavigationContainer,
  useNavigationContainerRef,
  DefaultTheme,
  DarkTheme,
} from '@react-navigation/native';
import RootStack from 'src/navigations/RootStack';
import {Provider} from 'react-redux';
import store from './src/configureStore';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useColorScheme} from 'react-native';
import navigationRef from './src/navigationRef';

interface Props {}

const App = (props: Props) => {
  const scheme = useColorScheme();

  const onReady = async () => {
    // const userInfo = await AsyncStorage.getItem('@userInfo');
    // if (userInfo) {
    //   store.dispatch({
    //     type: 'LOAD_USER_SUCCESS',
    //     payload: JSON.parse(userInfo),
    //   });
    //   navigationRef.reset({
    //     index: 0,
    //     routes: [{name: 'Main'}],
    //   });
    // }
  };

  return (
    <Provider store={store}>
      <NavigationContainer
        ref={navigationRef}
        onReady={onReady}
        theme={scheme === 'dark' ? DarkTheme : DefaultTheme}>
        <RootStack />
      </NavigationContainer>
    </Provider>
  );
};

export default App;
