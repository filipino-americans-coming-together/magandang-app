import React from 'react'
import { View, Image, TouchableOpacity, Linking } from 'react-native'

import { OpenSansBoldText } from '../../components/StyledText'

const Map = ({ building, floor, map, link }) => {
  const handlePress = () => {
    if (link) {
      Linking.openURL(link)
    }
  }
  return (
    <View style={{ flex: 1, paddingVertical: 16 }}>
      <OpenSansBoldText style={{ fontSize: 22 }}>{building}</OpenSansBoldText>
      <OpenSansBoldText style={{ fontSize: 18, color: '#999999', paddingBottom: 10 }}>{floor}</OpenSansBoldText>
      <View style={{
        flex: 1,
        flexDirection: 'column',
        height: 280
     
      }}>
        <TouchableOpacity 
          onPress={handlePress}
          style={{
            flex: 1,
            width: '100%'
          }}
        >
          <Image 
            source={map}
            style={{
              flex: 1,
              width: '100%',
            }}
            resizeMode='contain'
            />
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default Map