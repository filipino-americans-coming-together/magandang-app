import React, { useEffect } from 'react';
import {
  ScrollView,
  Image,
  View,
} from 'react-native';

import { getFridayAgenda, getSaturdayAgenda } from '../constants/events'
import Colors from '../constants/Colors'
import registerForPushNotificationsAsync from '../services/registerForPushNotificationsAsync'
import UIGradientCard from '../UIComponents/UIGradientCard'

import { 
  OpenSansBoldText,
  OpenSansRegularText,
  OpenSansSemiboldText,
  OpenSansLightText
} from '../components/StyledText'
import UIStatusBarSpacer from '../UIComponents/UIStatusBarSpacer'
import UIScreenHeader from '../UIComponents/UIScreenHeader'

const Event = ({ event }) => {
  const commonStyles = {
    color: Colors.WHITE
  }
  return (
    <UIGradientCard style={{
      flex: 0,
      flexDirection: 'row',
      marginBottom: 15
    }}>
      <View style={{
        flex: 2,
        paddingRight: 10
      }}> 
        <OpenSansBoldText style={{
          ...commonStyles,
          fontSize: 17,
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
          fontSize: 17
        }}>
          {event.title}
        </OpenSansSemiboldText>
        <OpenSansLightText style={{
          ...commonStyles,
          fontSize: 17
        }}>
          {event.location}
        </OpenSansLightText>
      </View>
    </UIGradientCard>
  )
}

export default function HomeScreen() {
  useEffect(() => {
    registerForPushNotificationsAsync()
  }, [])

  const fridayAgenda = getFridayAgenda()
  const saturdayAgenda = getSaturdayAgenda()
  
  return (
    <View style={{ 
      flex: 1,
      backgroundColor: Colors.OFF_WHITE,
    }}>
      <UIStatusBarSpacer/>
      <ScrollView>
        <View style={{ height: 300 }}>
          <Image 
            source={require('../../assets/images/preview.png')}
            style={{ 
              flex: 1,
              height: undefined,
              width: undefined,
            }}
            resizeMode="cover"
          />
        </View>
        <UIScreenHeader>Agenda</UIScreenHeader>
        <View style={{
          paddingHorizontal: 16
        }}>
          <OpenSansLightText style={{
            fontSize: 25,
            marginBottom: 13,
            marginTop: 20
          }}>Friday</OpenSansLightText>
          {fridayAgenda.map(event => {
            return <Event event={event}/>
          })}
          <OpenSansLightText style={{
            fontSize: 25,
            marginBottom: 13,
            marginTop: 20
          }}>Saturday</OpenSansLightText>
          {saturdayAgenda.map(event => {
            return <Event event={event}/>
          })}
        </View>
      </ScrollView>
    </View>
  );
}

HomeScreen.navigationOptions = {
  header: null,
};