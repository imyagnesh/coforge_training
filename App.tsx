import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import RootStack from 'src/navigations/RootStack';

interface Props {}

const App = (props: Props) => {
  return (
    <NavigationContainer>
      <RootStack />
    </NavigationContainer>
  );
};

export default App;
