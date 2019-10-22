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

import { fetchUpdates, fetchAllWorkshops } from '../api/Client'
import { 
  getFavoriteWorkshops, 
  storeFavoriteWorkshops 
} from '../services/favoriteWorkshopsStore'
import registerForPushNotificationsAsync from '../services/registerForPushNotificationsAsync'

import { OpenSansLightText, OpenSansRegularText } from '../components/StyledText'
import UpdatesListView from '../components/updates/UpdatesListView'
import WorkshopsListView from '../components/workshops/WorkshopsListView'

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

  const [updates, setUpdates] = useState()
  useEffect(() => {
    fetchUpdates()
        .then(res => setUpdates(res.data.updates))
  }, [])
  useEffect(() => {
    const interval = setInterval(() => {
      fetchUpdates()
        .then(res => setUpdates(res.data.updates))
    }, 1000)
    return () => {
      clearInterval(interval)
    }
  })

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
      backgroundColor: '#fff'
    }}>
      <ScrollView
        contentContainerStyle={{
          flex: 1,
          justifyContent: 'space-between'
        }}
      >
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
        <View style={{ 
          flex: 1,
        }}>
          <View style={sectionStyles.container}>
            <View style={sectionStyles.header}>
              <OpenSansLightText style={sectionStyles.headerText}>Updates</OpenSansLightText>
            </View>
            <UpdatesListView updates={updates}/>
          </View>
          <View style={sectionStyles.container}>
            <View style={sectionStyles.header}>
              <OpenSansLightText style={sectionStyles.headerText}>Favorite Workshops</OpenSansLightText>
            </View>
            <WorkshopsListView workshops={favoriteWorkshops}/>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}

HomeScreen.navigationOptions = {
  header: null,
};

const sectionStyles = StyleSheet.create({
  container: {
    paddingTop: 20,
    paddingBottom: 10,
    flex: 0,
  },
  header: {
    paddingBottom: 15,
    flex: 0
  },
  headerText: {
    textAlign: 'center',
    fontSize: 24,
    paddingBottom: 10,
  },
  body: {
    flex: 0
  }
})