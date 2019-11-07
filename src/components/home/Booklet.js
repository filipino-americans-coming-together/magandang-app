import React from 'react'
import { View, Image, TouchableOpacity, Linking } from 'react-native'

import UIScreenHeader from '../../UIComponents/UIScreenHeader'
import { OpenSansLightText } from '../StyledText' 

const bookletImage = require('../../../assets/images/home/booklet.png')

const Booklet = () => {
  const handlePress = () => {
    Linking.openURL('http://fact.psauiuc.org/booklet')
  }
  return (
    <View>
      <UIScreenHeader>Conference Booklet</UIScreenHeader>
      <View style={{
        paddingHorizontal: 16,
        marginTop: 10,
        marginBottom: 30
      }}>
        <OpenSansLightText style={{
          textAlign: 'center',
          paddingBottom: 20,
          paddingHorizontal: 40,
          fontSize: 15
        }}>Take a look for more information about FACT 2019!</OpenSansLightText>
        <View style={{
          flex: 1,
          flexDirection: 'row',
          height: 280,
        }}>
          <TouchableOpacity
            onPress={handlePress}
            style={{
              flex: 1,
              width: '100%'
            }}
          >
            <Image
              source={bookletImage}
              style={{
                flex: 1,
                width: '100%'
              }}
              resizeMode='contain'
            />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  )
}
export default Booklet