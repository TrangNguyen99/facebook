import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import React, {useLayoutEffect} from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import NavBar from '../components/NavBar';
import FriendScreen from '../screens/FriendScreen';
import HomeScreen from '../screens/HomeScreen';
import NotificationScreen from '../screens/NotificationScreen';
import PersonalScreen from '../screens/PersonalScreen';
import SettingScreen from '../screens/SettingScreen';
import * as colors from './../constants/colors';

const Tab = createMaterialTopTabNavigator();

function TopTabNavigator({navigation}) {
  useLayoutEffect(() => {
    navigation.setOptions({
      headerTitle: () => {
        return (
          <NavBar
            handleSearchClick={() => navigation.navigate('SearchScreen')}
          />
        );
      },
    });
  }, [navigation]);

  return (
    <Tab.Navigator
      initialRouteName={'HomeScreen'}
      tabBarOptions={{
        activeTintColor: colors.blueA400,
        inactiveTintColor: colors.grey700,
        showIcon: true,
        showLabel: false,
      }}
      screenOptions={({route}) => ({
        tabBarIcon: ({focused, color}) => {
          let iconName;
          if (route.name === 'HomeScreen') {
            iconName = focused ? 'home' : 'home-outline';
          } else if (route.name === 'FriendScreen') {
            iconName = focused ? 'people' : 'people-outline';
          } else if (route.name === 'PersonalScreen') {
            iconName = focused ? 'person-circle' : 'person-circle-outline';
          } else if (route.name === 'NotificationScreen') {
            iconName = focused ? 'notifications' : 'notifications-outline';
          } else if (route.name === 'SettingScreen') {
            iconName = focused ? 'menu' : 'menu-outline';
          }
          return <Ionicons name={iconName} color={color} size={24} />;
        },
      })}>
      <Tab.Screen name="HomeScreen" component={HomeScreen} />
      <Tab.Screen name="FriendScreen" component={FriendScreen} />
      <Tab.Screen name="PersonalScreen" component={PersonalScreen} />
      <Tab.Screen name="NotificationScreen" component={NotificationScreen} />
      <Tab.Screen name="SettingScreen" component={SettingScreen} />
    </Tab.Navigator>
  );
}

export default TopTabNavigator;
