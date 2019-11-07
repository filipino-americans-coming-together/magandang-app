import React from 'react'
import { View  } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

import { OpenSansLightText } from '../../StyledText'

const WorkshopId = ({ children }) => {
  const gradientColors = ['rgba(226,174,218,1)', 'rgba(212,147,203,1)']
  const containerStyles = {
    flex: 0,
    padding: 12,
    borderRadius: 10,
  }

  const textStyles = {
    fontSize: 18,
    color: 'white'
  }

  return (
    <LinearGradient colors={gradientColors} style={containerStyles}>
      <View style={{ flex: 1, justifyContent: 'center'}}>
        <OpenSansLightText style={textStyles}>{children}</OpenSansLightText>
      </View>
    </LinearGradient>
  )
}

export default WorkshopId