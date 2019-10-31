import React, { useState, useEffect } from 'react';
import {
  ScrollView,
  Image,
  View,
  Picker
} from 'react-native';
import Constants from 'expo-constants';

import Colors from '../constants/Colors'
import { fetchUpdates, fetchAllWorkshops } from '../api/Client'
import { 
  getFavoriteWorkshops, 
  storeFavoriteWorkshops 
} from '../services/favoriteWorkshopsStore'
import registerForPushNotificationsAsync from '../services/registerForPushNotificationsAsync'

import UIStatusBarSpacer from '../UIComponents/UIStatusBarSpacer'
import UIScreenHeader from '../UIComponents/UIScreenHeader'

export default function HomeScreen({ navigation }) {
  useEffect(() => {
    registerForPushNotificationsAsync()
  }, [])
  
  return (
    <View style={{ 
      flex: 1,
      backgroundColor: Colors.OFF_WHITE,
    }}>
      <UIStatusBarSpacer/>
      <ScrollView>
        <View style={{ height: 300 }}>
          <Image 
            source={require('../../assets/images/preview.png')}
            style={{ 
              flex: 1,
              height: undefined,
              width: undefined,
            }}
            resizeMode="cover"
          />

        </View>
        <UIScreenHeader>Agenda</UIScreenHeader>

      </ScrollView>
    </View>
  );
}

HomeScreen.navigationOptions = {
  header: null,
};