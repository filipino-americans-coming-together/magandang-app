import React from 'react';
import { Platform } from 'react-native';
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';

import TabBarLabel from '../components/TabBarLabel'
import TabBarIcon from '../components/TabBarIcon';
import HomeScreen from '../screens/HomeScreen';
import WorkshopsScreen from '../screens/WorkshopsScreen';
import SettingsScreen from '../screens/SettingsScreen';

import { Text } from 'react-native';

const config = Platform.select({
  web: { headerMode: 'screen' },
  default: {},
});

const HomeStack = createStackNavigator(
  {
    Home: HomeScreen,
  },
  config
);

HomeStack.navigationOptions = {
  tabBarLabel: ({ focused }) => <TabBarLabel title='Home' focused={focused} />,
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={
        Platform.OS === 'ios'
          ? 'ios-home'
          : 'md-home'
      }
    />
  ),
};

HomeStack.path = '';

const WorkshopsStack = createStackNavigator(
  {
    Workshops: WorkshopsScreen,
  },
  config
);

WorkshopsStack.navigationOptions = {
  tabBarLabel: ({ focused }) => <TabBarLabel title='Workshops' focused={focused} />,
  tabBarIcon: ({ focused }) => (
    <TabBarIcon 
      focused={focused} 
      name={
        Platform.OS === 'ios' 
          ? 'ios-people'
          : 'md-people'
      } 
    />
  ),
};

WorkshopsStack.path = '';

const SettingsStack = createStackNavigator(
  {
    Settings: SettingsScreen,
  },
  config
);

SettingsStack.navigationOptions = {
  tabBarLabel: ({ focused }) => <TabBarLabel title='Map' focused={focused} />,
  tabBarIcon: ({ focused }) => (
    <TabBarIcon 
      focused={focused} 
      name={
        Platform.OS === 'ios' ? 'ios-map' : 'md-map'
      } />
  ),
};

SettingsStack.path = '';

const tabNavigator = createBottomTabNavigator({
  HomeStack,
  WorkshopsStack,
  SettingsStack,
});

tabNavigator.path = '';

export default tabNavigator;
