import React from 'react'
import { View } from 'react-native';

import { OpenSansBoldText } from '../../StyledText'

const WorkshopFacilitator = ({ children }) => {
  const textStyles = {
    fontSize: 15,
    color: '#999999',
    paddingVertical: 5,
  }
  return (
    <View style={{ flex: 1}}>
      <OpenSansBoldText style={textStyles}>{children}</OpenSansBoldText>
    </View>
  )
}

export default WorkshopFacilitator