import React from 'react'
import { View, ScrollView } from 'react-native'

import UIActivityIndicator from '../../components/UIActivityIndicator'
import { OpenSansLightText } from '../StyledText'
import Update from './Update'

const UpdatesListView = ({ updates }) => {
  const isLoading = updates === undefined
  if (isLoading) {
    return (
      <UIActivityIndicator />
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
    }}>
      {updates.map(update => (
        <Update key={update.title} update={update}/>
      ))}
    </ScrollView>
  )
}

export default UpdatesListView