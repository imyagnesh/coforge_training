import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import RootStack from 'src/navigations/RootStack';
import {Provider} from 'react-redux';
import store from './src/configureStore';

interface Props {}

const App = (props: Props) => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <RootStack />
      </NavigationContainer>
    </Provider>
  );
};

export default App;
