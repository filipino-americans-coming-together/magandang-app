import React from 'react'
import { Linking, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

import UIGradientCard from './UIGradientCard'

const UISocialMediaButton = ({ name, link }) => {
  const handlePress = () => {
    if (link) {
      Linking.openURL(link)
    }
  }

  return (
    <TouchableOpacity 
      onPress={handlePress}
      style={{
        flex: 1
      }}
    >
      <UIGradientCard style={{
        flex: 0,
        flexDirection: 'row',
        justifyContent: 'center',
        margin: 2,
        padding: 0,
        paddingVertical: 5,
        borderRadius: 5,
      }}>
        <Ionicons name={name} size={30} color='white'/>
      </UIGradientCard>
    </TouchableOpacity>
  )
}

export default UISocialMediaButton
