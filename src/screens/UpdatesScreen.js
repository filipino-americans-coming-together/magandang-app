import React, { useState, useEffect } from 'react'
import { View, StyleSheet } from 'react-native'

import { fetchUpdates } from '../api/Client'

import { OpenSansLightText } from '../components/StyledText'
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
    <View style={{ flex: 1 }}>
      <UIStatusBarSpace/>
      <UIScreenHeader>Updates</UIScreenHeader>
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