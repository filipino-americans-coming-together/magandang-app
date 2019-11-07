import React from 'react'
import { View } from 'react-native'

import Colors from '../../constants/Colors'

import { 
  OpenSansLightText,
  OpenSansBoldText,
  OpenSansSemiboldText
} from '../StyledText'
import UIGradientCard from '../../UIComponents/UIGradientCard'
import UIScreenHeader from '../../UIComponents/UIScreenHeader'

const Event = ({ event }) => {
  const commonStyles = {
    color: Colors.WHITE
  }
  const MULTIPLIER = 40
  return (
    <UIGradientCard style={{
      flex: 0,
      flexDirection: 'row',
      marginBottom: 10,
      minHeight: MULTIPLIER * event.size
    }}>
      <View style={{
        flex: 2,
        paddingRight: 10
      }}> 
        <OpenSansBoldText style={{
          ...commonStyles,
          fontSize: 16,
          textAlign: 'right',
        }}>
          {event.time}
        </OpenSansBoldText>
      </View>
      <View style={{
        flex: 3
      }}>
        <OpenSansSemiboldText style={{
          ...commonStyles,
          fontSize: 16
        }}>
          {event.title}
        </OpenSansSemiboldText>
        <OpenSansLightText style={{
          ...commonStyles,
          fontSize: 16
        }}>
          {event.location}
        </OpenSansLightText>
      </View>
    </UIGradientCard>
  )
}

const Agenda = ({ fridayAgenda, saturdayAgenda }) => {

  return (
    <View>
      <UIScreenHeader>Agenda</UIScreenHeader>
        <View style={{
          paddingHorizontal: 16
        }}>
          <OpenSansLightText style={{
            fontSize: 25,
            marginBottom: 13,
            marginTop: 10
          }}>Friday</OpenSansLightText>
          {fridayAgenda.map(event => {
            return <Event key={event.title} event={event}/>
          })}
          <OpenSansLightText style={{
            fontSize: 25,
            marginBottom: 13,
            marginTop: 20
          }}>Saturday</OpenSansLightText>
          {saturdayAgenda.map(event => {
            return <Event key={event.title} event={event}/>
          })}
        </View>
    </View>
  )
}

export default Agenda