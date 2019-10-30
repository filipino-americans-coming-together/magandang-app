import React from 'react'
import { Platform, View } from 'react-native'
import Constants from 'expo-constants';

import Colors from '../constants/Colors'

const UIStatusBarSpacer = () => {
  if (Platform.OS !== 'ios') {
    return null
  }
  return (
    <View style={{
      backgroundColor: Colors.PLUM,
      height: Constants.statusBarHeight,
    }}/>
  )
}

export default UIStatusBarSpacer