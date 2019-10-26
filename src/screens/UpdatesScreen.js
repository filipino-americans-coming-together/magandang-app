import React, { useState, useEffect } from 'react'
import Constants from 'expo-constants';
import { View, StyleSheet } from 'react-native'

import Colors from '../constants/Colors'
import { fetchUpdates } from '../api/Client'

import { OpenSansLightText, OpenSansRegularText } from '../components/StyledText'
import UpdatesListView from '../components/updates/UpdatesListView'

const UpdatesHeader = () => (
  <View style={{
    fontSize: 24,
    paddingHorizontal: 10,
    paddingVertical: 12
  }}>
    <OpenSansLightText style={{ fontSize: 24 }}>Updates</OpenSansLightText>
  </View>
)
const UpdatesScreen = ({ navigation }) => {
  const [updates, setUpdates] = useState()
  useEffect(() => {
    fetchUpdates()
        .then(res => setUpdates(res.data.updates))
    // const interval = setInterval(() => {
    //   fetchUpdates()
    //     .then(res => setUpdates(res.data.updates))
    // }, 1000)
    // return () => {
    //   clearInterval(interval)
    // }
  }, [])

  return (
    <View style={{ flex: 1 }}>
      <View style={{
        backgroundColor: Colors.PLUM,
        height: Constants.statusBarHeight,
      }} />
      <UpdatesHeader />
      <UpdatesListView updates={updates}/>
    </View>
  )
}

const sectionStyles = StyleSheet.create({
  header: {
    paddingBottom: 15,
    flex: 0
  },
  body: {
    flex: 0
  }
})

UpdatesScreen.navigationOptions = {
  header: null,
};

export default UpdatesScreen