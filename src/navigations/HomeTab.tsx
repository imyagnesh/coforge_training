import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import IconButton from '@components/IconButton';
import {Alert} from 'react-native';
import {removeUser} from '@utils/index';
import SearchStackNavigation from './SearchStack';
import ProductsProvider from 'src/contexts/productsProvider';

const Tab = createBottomTabNavigator();

interface Props {}

const HomeTab = ({}: Props) => {
  return (
    <ProductsProvider>
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
          options={{
            headerShown: false,
          }}
          name="Search"
          component={SearchStackNavigation}
        />
        <Tab.Screen
          name="Settings"
          getComponent={() => require('@screens/Settings').default}
        />
      </Tab.Navigator>
    </ProductsProvider>
  );
};

export default HomeTab;
