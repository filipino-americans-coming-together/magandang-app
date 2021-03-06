import React from 'react'
import { View } from 'react-native'

import { LinearGradient } from 'expo-linear-gradient';

import { OpenSansExtraBoldText, OpenSansLightText, OpenSansRegularText } from '../StyledText'


const gradientColors = ['rgba(226,174,218,1)', 'rgba(212,147,203,1)']

const Update = ({ update }) => {
  return (
    <LinearGradient 
      colors={gradientColors} 
      style={{
        borderRadius: 10,
        marginBottom: 10,
      }}
    >
      <View style={{
        padding: 15,
        paddingBottom: 20
      }}>
        <OpenSansExtraBoldText style={{
          color: '#fff',
          fontSize: 16,
          paddingBottom: 5
        }}>
          {update.title}
        </OpenSansExtraBoldText>
        <OpenSansRegularText style={{
          color: '#fff',
          paddingBottom: 15
        }}>
          {update.message}
        </OpenSansRegularText>
        <OpenSansLightText style={{
          color: '#fff',
          paddingTop: 3,
          fontSize: 17
        }}>
          {`- ${update.author}`}
        </OpenSansLightText>
      </View>
    </LinearGradient>
  )
}

export default Update