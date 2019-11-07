import React, { useState } from 'react'
import { View, TouchableWithoutFeedback } from 'react-native';


import { OpenSansLightText } from '../../StyledText'
import { SESSION_TO_TIME_TABLE } from '../../../constants/events' 

import { parseParagraphsIntoArray } from '../../../lib/workshop'

import WorkshopId from './WorkshopId'
import WorkshopTitle from './WorkshopTitle'
import FavoriteButton from './FavoriteButton'
import WorkshopFacilitator from './WorkshopFacilitator'

const Workshop = ({ workshop, showFavoriteButton, isFavorited, toggleFavorited, isSelected, setSelected }) => {
  const { id, name, title, description } = workshop

  const renderParagraphs = () => {
    return parseParagraphsIntoArray(description)
    .map((paragraph, i) => {
      return (
        <OpenSansLightText 
          key={i}
          style={{
            fontSize: 16.5,
            marginTop: 10,
          }}
          >
          {paragraph}
        </OpenSansLightText>
      )
    })
  }

   
  return (
    <View style={{
      flex: 1,
      marginVertical: 5,
    }}>
      <View style={{ flex: 1, flexDirection: 'row' }}>
        <TouchableWithoutFeedback onPress={setSelected}>
          <View style={{ flex: 1, flexDirection: 'row' }}>
            <WorkshopId>{id}</WorkshopId>
            <View style={{ flex: 1, paddingLeft: 12 }}>
              <WorkshopTitle>{title}</WorkshopTitle>
              <WorkshopFacilitator>{name}</WorkshopFacilitator>
              <OpenSansLightText style={{
                fontSize: 15,
                color: '#444444',
                marginTop: 2,
                marginBottom: 1
              }}>{SESSION_TO_TIME_TABLE[workshop.session]}</OpenSansLightText>
              <OpenSansLightText style={{
                fontSize: 15,
                color: '#444444'
              }}>{workshop.location}</OpenSansLightText>
            </View>
          </View>
        </TouchableWithoutFeedback>
        {
          showFavoriteButton && (
            <FavoriteButton isFavorited={isFavorited} toggleFavorited={toggleFavorited} />
          )
        }
      </View>
      {
        isSelected && (
          <TouchableWithoutFeedback 
            onPress={setSelected}
          >
            <View style={{ paddingVertical: 20 }}>
              {renderParagraphs()}
            </View>
          </TouchableWithoutFeedback>
        )
      }
    </View>
  )
}

export default Workshop