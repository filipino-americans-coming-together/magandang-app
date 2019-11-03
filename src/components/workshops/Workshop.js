import React from 'react'
import { View, TouchableOpacity } from 'react-native';

import { LinearGradient } from 'expo-linear-gradient';
import { OpenSansBoldText, OpenSansLightText } from '../StyledText'
import { Ionicons } from '@expo/vector-icons';
import { SESSION_TO_TIME_TABLE } from '../../constants/events' 

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

const WorkshopFacilitator = ({ children }) => {
  const textStyles = {
    fontSize: 12,
    color: '#999999',
    paddingVertical: 5,
  }
  return (
    <View style={{ flex: 1}}>
      <OpenSansBoldText style={textStyles}>{children}</OpenSansBoldText>
    </View>
  )
}

const FavoriteIcon = ({ isFavorited, toggleFavorited }) => {
  const containerStyles = {
    flex: 0,
    paddingLeft: 12
  }
  const verticallyCenterStyles = {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center'
  }
  return (
    <TouchableOpacity onPress={toggleFavorited}>
      <View style={verticallyCenterStyles}>
        <View style={containerStyles}>
          <View style={{ flex: 0 }}>
            <Ionicons name={ isFavorited ? 'ios-star' : 'ios-star-outline'} size={30} color="#bbbbbb" />
          </View>
        </View>
      </View>
    </TouchableOpacity>
  )
} 

const Workshop = ({ workshop, showFavoriteButton, isFavorited, toggleFavorited }) => {
  const { id, name, title } = workshop
  return (
    <View style={{
      flex: 1,
      marginVertical: 10,
    }}>
      <View style={{ flex: 1, flexDirection: 'row' }}>
        <WorkshopId>{id}</WorkshopId>
        <View style={{ flex: 1, paddingLeft: 12 }}>
          <WorkshopTitle>{title}</WorkshopTitle>
          <WorkshopFacilitator>{name}</WorkshopFacilitator>
          <OpenSansLightText style={{
            fontSize: 15,
            color: '#444444'
          }}>{SESSION_TO_TIME_TABLE[workshop.session]}</OpenSansLightText>
          <OpenSansLightText style={{
            fontSize: 15,
            color: '#444444'
          }}>{workshop.location}</OpenSansLightText>
        </View>
        {
          showFavoriteButton && (
            <FavoriteIcon isFavorited={isFavorited} toggleFavorited={toggleFavorited} />
          )
        }
      </View>
    </View>
  )
}

export default Workshop