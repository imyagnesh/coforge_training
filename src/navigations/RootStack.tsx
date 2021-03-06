import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import {RootStackParamList} from 'src/types/RootStackParams';
import HomeTab from './HomeTab';

interface Props {}

const Stack = createNativeStackNavigator<RootStackParamList>();

const RootStack = (props: Props) => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        options={{
          headerShown: false,
        }}
        name="Login"
        getComponent={() => require('@screens/Login').default}
      />
      <Stack.Screen
        options={{
          headerTransparent: true,
          headerTitle: '',
          headerShadowVisible: false,
        }}
        getComponent={() => require('@screens/Register').default}
        name="Register"
      />
      <Stack.Screen
        options={{
          headerShown: false,
        }}
        name="Main"
        component={HomeTab}
      />
      <Stack.Group
        screenOptions={{
          presentation: 'modal',
        }}>
        <Stack.Screen
          name="Cart"
          getComponent={() => require('../screens/Cart').default}
        />
        <Stack.Screen
          name="VideoPlayer"
          getComponent={() => require('../screens/VideoPlayer').default}
        />

        <Stack.Screen
          name="ScrollAnimation"
          getComponent={() => require('../screens/ScrollAnimation').default}
        />
      </Stack.Group>
    </Stack.Navigator>
  );
};

export default RootStack;
