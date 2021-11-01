import i18n from 'i18n-js';
import React, {useEffect, useMemo} from 'react';
import {
  NavigationContainer,
  DefaultTheme,
  DarkTheme,
} from '@react-navigation/native';
import RootStack from 'src/navigations/RootStack';
import {Provider} from 'react-redux';
import store from './src/configureStore';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useColorScheme} from 'react-native';
import navigationRef from './src/navigationRef';
import ThemeProvider, {ThemeContext} from 'src/contexts/themeContext';
import {setI18nConfig} from './src/i18nConfig';
import LocaleProvider from 'src/contexts/localeProvider';

interface Props {}

const App = (props: Props) => {
  const scheme = useColorScheme();

  useEffect(() => {
    setI18nConfig();
  }, []);

  const onReady = async () => {
    const userInfo = await AsyncStorage.getItem('@userInfo');
    if (userInfo) {
      store.dispatch({
        type: 'LOAD_USER_SUCCESS',
        payload: JSON.parse(userInfo),
      });
      navigationRef.reset({
        index: 0,
        routes: [{name: 'Main'}],
      });
    }
  };

  return (
    <LocaleProvider>
      <ThemeProvider>
        <Provider store={store}>
          <ThemeContext.Consumer>
            {({theme}) => (
              <NavigationContainer
                ref={navigationRef}
                onReady={onReady}
                theme={scheme === 'dark' ? DarkTheme : DefaultTheme}>
                <RootStack />
              </NavigationContainer>
            )}
          </ThemeContext.Consumer>
        </Provider>
      </ThemeProvider>
    </LocaleProvider>
  );
};

export default App;
