import React from 'react';
import { Platform } from 'react-native';
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';

import TabBarLabel from '../components/TabBarLabel'
import TabBarIcon from '../components/TabBarIcon';

import HomeScreen from '../screens/HomeScreen';
import UpdatesScreen from '../screens/UpdatesScreen'
import WorkshopsScreen from '../screens/WorkshopsScreen';
import MapsScreen from '../screens/MapsScreen';

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

const UpdatesStack = createStackNavigator(
  {
    Updates: UpdatesScreen
  },
  config
)

UpdatesStack.navigationOptions = {
  tabBarLabel: ({ focused }) => <TabBarLabel title='Updates' focused={focused} />,
  tabBarIcon: ({ focused }) => (
    <TabBarIcon 
      focused={focused} 
      name={
        Platform.OS === 'ios' 
          ? 'ios-alert'
          : 'md-alert'
      } 
    />
  ),
}
UpdatesStack.path = ''

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

const MapsStack = createStackNavigator(
  {
    Maps: MapsScreen,
  },
  config
);

MapsStack.navigationOptions = {
  tabBarLabel: ({ focused }) => <TabBarLabel title='Map' focused={focused} />,
  tabBarIcon: ({ focused }) => (
    <TabBarIcon 
      focused={focused} 
      name={
        Platform.OS === 'ios' ? 'ios-map' : 'md-map'
      } />
  ),
};

MapsStack.path = '';

const tabNavigator = createBottomTabNavigator({
  WorkshopsStack,
  HomeStack,
  UpdatesStack,
  MapsStack,
});

tabNavigator.path = '';

export default tabNavigator;
