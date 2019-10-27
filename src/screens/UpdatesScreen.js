import React, { useState, useEffect } from 'react'
import { View, StyleSheet } from 'react-native'

import { fetchUpdates } from '../api/Client'

import Colors from '../constants/Colors'
import UpdatesListView from '../components/updates/UpdatesListView'
import UIStatusBarSpace from '../components/UIStatusBarSpacer'
import UIScreenHeader from '../components/UIScreenHeader'

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
    <View style={{ flex: 1, backgroundColor: Colors.OFF_WHITE }}>
      <UIStatusBarSpace/>
      <UIScreenHeader>Updates</UIScreenHeader>
      <View style={{ flex: 1, paddingHorizontal: 16 }}>
        <UpdatesListView updates={updates}/>
      </View>
    </View>
  )
}

UpdatesScreen.navigationOptions = {
  header: null,
};

export default UpdatesScreen