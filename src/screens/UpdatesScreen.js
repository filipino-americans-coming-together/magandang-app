import React, { useState, useEffect } from 'react'
import { View } from 'react-native'

import { fetchUpdates } from '../api/Client'
import Colors from '../constants/Colors'

import UIStatusBarSpace from '../UIComponents/UIStatusBarSpacer'
import UIScreenHeader from '../UIComponents/UIScreenHeader'
import UpdatesListView from '../components/updates/UpdatesListView'

const UpdatesScreen = ({ navigation }) => {
  const [updates, setUpdates] = useState()
  useEffect(() => {
    fetchUpdates()
      .then(res => setUpdates(res.data.updates))

    const didBlurSubscription = navigation.addListener(
      'willFocus',
      () => {
        fetchUpdates()
        .then(res => setUpdates(res.data.updates))
      }
    );
    
    return () => {
      didBlurSubscription.remove();
    }
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