import React from 'react'
import { View, ScrollView } from 'react-native'

import { OpenSansLightText, OpenSansRegularText } from '../StyledText'
import Update from './Update'

const UpdatesListView = ({ updates }) => {
  console.log(updates)
  const isLoading = updates === undefined
  if (isLoading) {
    return (
      <View style={{ flex: 0 }}>
        <OpenSansLightText style={{ flex: 0, fontSize: 16, textAlign: 'center' }}>
          Loading...
        </OpenSansLightText>
      </View>
    )
  }
  
  const hasNoUpdates = (updates || []).length === 0
  if (hasNoUpdates) {
    return (
      <View style={{ flex: 0 }}>
        <OpenSansLightText style={{ flex: 0, fontSize: 16, textAlign: 'center' }}>
          No Updates.
        </OpenSansLightText>
      </View>
    )
  }


  return (
    <ScrollView style={{
      paddingHorizontal: 10,
      height: 250
    }}>
      {updates.map(update => (
        <Update key={update.title} update={update}/>
      ))}
    </ScrollView>
  )
}

export default UpdatesListView