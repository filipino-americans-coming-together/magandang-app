import React from 'react'
import { ActivityIndicator, View } from 'react-native'

import Colors from '../constants/Colors'

const UIActivityIndicator = () => (
  <View
    style={{
      padding: 30
    }}
  >
    <ActivityIndicator size='large' color={Colors.PLUM} />
  </View>
)

export default UIActivityIndicator