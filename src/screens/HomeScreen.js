import React, { useEffect } from 'react';
import {
  ScrollView,
  Image,
  View,
} from 'react-native';

import { getFridayAgenda, getSaturdayAgenda } from '../constants/events'
import Colors from '../constants/Colors'
import registerForPushNotificationsAsync from '../services/registerForPushNotificationsAsync'


import { 
  MoamText,
} from '../components/StyledText'
import UIStatusBarSpacer from '../UIComponents/UIStatusBarSpacer'

import Agenda from '../components/home/Agenda'
import Booklet from '../components/home/Booklet'
import Fundraisers from '../components/home/Fundraisers'
import PrivacyPolicyLink from '../components/PrivacyPolicyLink'

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
        <View style={{ 
          position: 'relative',
          height: 300 
        }}>
          <Image 
            source={require('../../assets/images/preview.png')}
            style={{ 
              flex: 1,
              height: undefined,
              width: undefined,
            }}
            resizeMode="cover"
          />
          <View style={{
            position: 'absolute',
            top: 0,
            bottom: 0,
            left: 0,
            right: 0,
            justifyContent: 'center',
            alignItems: 'center'
          }}>
            <MoamText style={{
              color: Colors.WHITE,
              fontSize: 45,
            }}>FACT 2019</MoamText>
            <MoamText style={{
              marginTop: 30,
              color: Colors.WHITE,
              fontSize: 35,
            }}>Ikaw Lamang</MoamText>
          </View>
        </View>
        <Agenda fridayAgenda={fridayAgenda} saturdayAgenda={saturdayAgenda}/>
        <Booklet />
        <Fundraisers/>
        <PrivacyPolicyLink/>
      </ScrollView>
    </View>
  );
}

HomeScreen.navigationOptions = {
  header: null,
};