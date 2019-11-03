import React from 'react';
import { Platform } from 'react-native';
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';

import TabBarLabel from '../components/TabBarLabel'
import TabBarIcon from '../components/TabBarIcon';

import HomeScreen from '../screens/HomeScreen';
import UpdatesScreen from '../screens/UpdatesScreen'
import WorkshopsScreen from '../screens/WorkshopsScreen';
import MapsScreen from '../screens/MapsScreen';


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
  UpdatesStack,
  HomeStack,
  WorkshopsStack,
  MapsStack,
}, {
  tabBarOptions: {
    showLabel: false
  }
});

tabNavigator.path = '';

export default tabNavigator;
