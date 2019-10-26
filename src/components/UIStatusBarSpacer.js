import React from 'react'
import { View } from 'react-native'
import Constants from 'expo-constants';

import Colors from '../constants/Colors'

const UIStatusBarSpacer = () => (
  <View style={{
    backgroundColor: Colors.PLUM,
    height: Constants.statusBarHeight,
  }}/>
)

export default UIStatusBarSpacer