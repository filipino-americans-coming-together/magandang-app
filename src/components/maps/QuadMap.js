import React from 'react'
import { View, Image, TouchableOpacity, Linking } from 'react-native'

import { QUAD_MAP } from '../../constants/maps'

import { OpenSansBoldText, OpenSansLightText } from '../../components/StyledText'

const QuadMap = () => {
  return (
    <View style={{ flex: 1, paddingVertical: 16 }}>
      <OpenSansBoldText style={{ fontSize: 22 }}>UIUC Quad</OpenSansBoldText>
      <OpenSansBoldText 
        style={{ fontSize: 18, color: '#999999', paddingBottom: 10 }}
      >
        Map Legend
      </OpenSansBoldText>
      <View style={{
        flexDirection: 'row',
        paddingBottom: 20
      }}>
        <View style={{ flex: 1, textAlign: 'left' }}>
          <OpenSansLightText>1 - Illini Union</OpenSansLightText>
          <OpenSansLightText>2 - YMCA</OpenSansLightText>
          <OpenSansLightText>3 - Lincoln Hall</OpenSansLightText>
          <OpenSansLightText>4 - Gregory Hall</OpenSansLightText>

        </View>
        <View style={{ flex: 1 }}>
          <OpenSansLightText>5 - Foellinger Auditorium</OpenSansLightText>
          <OpenSansLightText>6 - AACC</OpenSansLightText>
          <OpenSansLightText>7 - Noyes Laboratory</OpenSansLightText>
        </View>
      </View>
      <View style={{
        flex: 1,
        flexDirection: 'column',
        height: 280
      }}>
        <Image 
          source={QUAD_MAP}
          style={{
            flex: 1,
            width: '100%'
          }}
          resizeMode='contain'
        />
      </View>
    </View>
  )
}

export default QuadMap