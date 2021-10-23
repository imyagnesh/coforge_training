import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Login from '@screens/Login';
import Register from '@screens/Register';
import {RootStackParamList} from 'src/types/RootStackParams';

const Stack = createNativeStackNavigator<RootStackParamList>();

interface Props {}

const App = (props: Props) => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          options={{
            headerShown: false,
          }}
          name="Login"
          component={Login}
        />
        <Stack.Screen
          options={{
            headerTransparent: true,
            headerTitle: '',
            headerShadowVisible: false,
          }}
          name="Register"
          component={Register}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
