import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import React from 'react';
import ActivityScreen from '../ActivityScreen';
import FeelingScreen from '../FeelingScreen';
import * as colors from './../../../constants/colors';

const Tab = createMaterialTopTabNavigator();

function FeelTabNavigator() {
  return (
    <Tab.Navigator
      initialRouteName={'FeelingScreen'}
      tabBarOptions={{
        activeTintColor: colors.blueA400,
        inactiveTintColor: colors.grey700,
      }}>
      <Tab.Screen
        name="FeelingScreen"
        component={FeelingScreen}
        options={{
          title: 'CẢM XÚC',
        }}
      />
      <Tab.Screen
        name="ActivityScreen"
        component={ActivityScreen}
        options={{
          title: 'HOẠT ĐỘNG',
        }}
      />
    </Tab.Navigator>
  );
}

export default FeelTabNavigator;
