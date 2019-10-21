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

import { fetchUpdates } from '../api/Client'
import registerForPushNotificationsAsync from '../services/registerForPushNotificationsAsync'

import { OpenSansLightText, OpenSansRegularText } from '../components/StyledText'
import UpdatesListView from '../components/updates/UpdatesListView'

export default function HomeScreen() {
  useEffect(() => {
    registerForPushNotificationsAsync()
  }, [])


  const [updates, setUpdates] = useState()
  useEffect(() => {
    fetchUpdates()
        .then(res => setUpdates(res.data.updates))
  }, [])
  
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
          marginHorizontal: 10
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
  },
  body: {
    flex: 0
  }
})