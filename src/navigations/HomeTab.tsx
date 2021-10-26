import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import IconButton from '@components/IconButton';
import {Alert} from 'react-native';
import {removeUser} from '@utils/index';

const Tab = createBottomTabNavigator();

interface Props {}

const HomeTab = ({}: Props) => {
  return (
    <Tab.Navigator
      screenOptions={({route, navigation}) => {
        return {
          tabBarIcon: ({size, color}) => {
            switch (route.name) {
              case 'Home': {
                const Icon = require('@assets/icons/home.svg').default;
                return <Icon height={size} width={size} fill={color} />;
              }
              case 'Search': {
                const Icon = require('@assets/icons/search.svg').default;
                return <Icon height={size} width={size} fill={color} />;
              }
              case 'Settings': {
                const Icon = require('@assets/icons/settings.svg').default;
                return <Icon height={size} width={size} fill={color} />;
              }

              default:
                return null;
            }
          },
          headerRight: () => {
            return (
              <IconButton
                component={require('@assets/icons/logout.svg').default}
                style={{paddingRight: 10}}
                onPress={async () => {
                  try {
                    await removeUser();
                    navigation.reset({
                      index: 0,
                      routes: [{name: 'Login'}],
                    });
                  } catch (error) {
                    console.warn(error);
                  }
                }}
              />
            );
          },
        };
      }}>
      <Tab.Screen
        name="Home"
        getComponent={() => require('@screens/Home').default}
      />
      <Tab.Screen
        name="Search"
        getComponent={() => require('@screens/Search').default}
      />
      <Tab.Screen
        name="Settings"
        getComponent={() => require('@screens/Settings').default}
      />
    </Tab.Navigator>
  );
};

export default HomeTab;
