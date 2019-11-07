import React from 'react'
import { View } from 'react-native';

import { OpenSansBoldText } from '../../StyledText'

const WorkshopTitle = ({ children }) => {
  const textStyles = {
    fontSize: 15
  }
  return (
    <View style={{ flex: 1 }}>
      <OpenSansBoldText style={textStyles}>{children}</OpenSansBoldText>
    </View>
  )
}

export default WorkshopTitle