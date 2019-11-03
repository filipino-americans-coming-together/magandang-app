import React from 'react'
import { View, ScrollView } from 'react-native'

import UISocialMediaButton from '../../UIComponents/UISocialMediaButton'
import UIActivityIndicator from '../../UIComponents/UIActivityIndicator'
import { OpenSansLightText } from '../StyledText'
import Update from './Update'




const UpdatesListView = ({ updates }) => {
  const isLoading = updates === undefined
  if (isLoading) {
    return (
      <View style={{
        flex: 1,
        justifyContent: 'center'
      }}>
        <UIActivityIndicator />
      </View>
    )
  }
  
  const hasNoUpdates = (updates || []).length === 0
  if (hasNoUpdates) {
    return (
      <View style={{ 
        flex: 1,
        flexDirection: 'column'
      }}>
        <View style={{
          flex: 1,
          justifyContent: 'center',
          paddingHorizontal: 50
        }}>

          <OpenSansLightText style={{
            marginVertical: 10,
            fontSize: 16,
          }}>
            We won't have updates until the conference. But, you can still stay up to date through social media!
          </OpenSansLightText>
          <View style={{
            flexDirection: 'row',
          }}>
            <UISocialMediaButton name="logo-facebook" link={"https://www.facebook.com/events/1121810308206799/"}/>
            <UISocialMediaButton name="logo-instagram" link={"https://www.instagram.com/psafact/"}/>
          </View>
        </View>
      </View>
    )
  }


  return (
    <ScrollView style={{
      flex: 1,
    }}>
      {updates.map(update => (
        <Update key={update.title} update={update}/>
      ))}
    </ScrollView>
  )
}

export default UpdatesListView