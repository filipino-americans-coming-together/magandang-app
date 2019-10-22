import React, { useState } from 'react'
import { View, ScrollView, Text } from 'react-native' 

import Workshop from './Workshop'
import { OpenSansLightText, OpenSansRegularText } from '../StyledText'

const WorkshopsListView = ({ workshops }) => {
  const isLoading = workshops === undefined
  if (isLoading) {
    return (
      <View style={{ flex: 0 }}>
        <OpenSansLightText style={{ flex: 0, fontSize: 16, textAlign: 'center' }}>
          Loading...
        </OpenSansLightText>
      </View>
    )
  }
  
  const hasNoWorkshops = (workshops || []).length === 0
  if (hasNoWorkshops) {
    return (
      <View style={{ flex: 0 }}>
        <OpenSansLightText style={{ flex: 0, fontSize: 16, textAlign: 'center' }}>
          You have no favorite workshops.
        </OpenSansLightText>
      </View>
    )
  }

  return (
    <ScrollView style={{
      paddingHorizontal: 10,
    }}>
      {(workshops || []).map(workshop => <Workshop workshop={workshop}/>)}
    </ScrollView>
  )
}

export default WorkshopsListView