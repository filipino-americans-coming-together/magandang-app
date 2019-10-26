import React, { useState, useEffect } from 'react';
import {
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  Image,
  View,
  StatusBar
} from 'react-native';
import Constants from 'expo-constants';

import Colors from '../constants/Colors'
import { fetchUpdates, fetchAllWorkshops } from '../api/Client'
import { 
  getFavoriteWorkshops, 
  storeFavoriteWorkshops 
} from '../services/favoriteWorkshopsStore'
import registerForPushNotificationsAsync from '../services/registerForPushNotificationsAsync'

export default function HomeScreen({ navigation }) {
  useEffect(() => {
    registerForPushNotificationsAsync()

    const didBlurSubscription = navigation.addListener(
      'willFocus',
      () => {
        getFavoriteWorkshops()
          .then(res => setFavoriteWorkshopsIds(res))
      }
    );
    
    return () => {
      didBlurSubscription.remove();
    }
  }, [])

  const [workshops, setWorkshops] = useState([])
  useEffect(() => {
    fetchAllWorkshops()
      .then(res => setWorkshops(res.data.workshops))
  }, [])

  const [favoriteWorkshopsIds, setFavoriteWorkshopsIds] = useState([])
  useEffect(() => {
    getFavoriteWorkshops()
      .then(res => setFavoriteWorkshopsIds(res))
  }, [])

  const favoriteWorkshops = workshops.filter(workshop => {
    return favoriteWorkshopsIds.includes(workshop.id)
  })
  
  return (
    <View style={{ 
      flex: 1,
      backgroundColor: '#fff',
    }}>
      <View style={{
        backgroundColor: Colors.PLUM,
        height: Constants.statusBarHeight,
      }} />
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

      </ScrollView>
    </View>
  );
}

HomeScreen.navigationOptions = {
  header: null,
};