import React from 'react';
import { View, ScrollView, Image, Dimensions } from 'react-native'

import ImageZoom from 'react-native-image-pan-zoom';

import { OpenSansBoldText } from '../components/StyledText'
import UIScreenHeader from '../components/UIScreenHeader'
import UIStatusBarSpacer from '../components/UIStatusBarSpacer'

const Map = ({ building, floor, map }) => {
  return (
    <View style={{ flex: 1, paddingVertical: 10 }}>
      <OpenSansBoldText style={{ fontSize: 20 }}>{building}</OpenSansBoldText>
      <OpenSansBoldText style={{ fontSize: 16, color: '#999999', }}>{floor}</OpenSansBoldText>
      <View style={{
        flex: 1,
        flexDirection: 'column',
        height: 280
     
      }}>
        <Image 
          source={map}
          style={{
            flex: 1,
            width: '100%',
          }}
          resizeMode='contain'
        />
      </View>
    </View>
  )
}
const MapsScreen = () => {
  const maps = [
    {
      id: 'lincoln-hall-floor-1',
      building: 'Lincoln Hall',
      floor: 'First Floor',
      map: require('../../assets/images/maps/lincoln-hall-floor-1.png'),
    },
    {
      id: 'gregory-hall-floor-1',
      building: 'Gregory Hall',
      floor: 'First Floor',
      map: require('../../assets/images/maps/gregory-hall-floor-1.png'),
    },
    {
      id: 'gregory-hall-floor-2',
      building: 'Gregory Hall',
      floor: 'Second Floor',
      map: require('../../assets/images/maps/gregory-hall-floor-2.png'),
    },
    {
      id: 'gregory-hall-floor-3',
      building: 'Gregory Hall',
      floor: 'Third Floor',
      map: require('../../assets/images/maps/gregory-hall-floor-3.png'),
    }
  ]
  return (
    <View style={{ flex: 1 }}>
      <UIStatusBarSpacer/>
      <UIScreenHeader>Campus Maps</UIScreenHeader>
      <ScrollView style={{ flex: 1 }}>
        <View style={{ paddingHorizontal: 20 }}>
          {maps.map(map => (
            <Map 
              key={map.id} 
              building={map.building}
              floor={map.floor}
              map={map.map}
            />
          ))}
        </View>
      </ScrollView>
    </View>
  )
}

MapsScreen.navigationOptions = {
  header: null,
};

export default MapsScreen

