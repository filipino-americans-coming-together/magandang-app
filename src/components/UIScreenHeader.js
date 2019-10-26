import React from 'react'
import { View } from 'react-native'

import { OpenSansLightText } from '../components/StyledText'

const UIScreenHeader = ({ children }) => (
  <View style={{ 
    paddingTop: 18,
    paddingBottom: 12, 
    paddingHorizontal: 10 ,
  }}>
    <OpenSansLightText style={{ textAlign: 'center', fontSize: 24 }}>{children}</OpenSansLightText>
  </View>
)

export default UIScreenHeader