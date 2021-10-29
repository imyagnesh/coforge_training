import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const SearchStack = createNativeStackNavigator();

interface Props {}

const SearchStackNavigation = (props: Props) => {
  return (
    <SearchStack.Navigator>
      <SearchStack.Screen
        name="Search"
        getComponent={() => require('../screens/Search').default}
      />
      <SearchStack.Screen
        name="Animate"
        getComponent={() => require('../screens/Animate').default}
      />
    </SearchStack.Navigator>
  );
};

export default SearchStackNavigation;
