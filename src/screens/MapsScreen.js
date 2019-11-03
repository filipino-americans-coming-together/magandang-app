import React from 'react';
import { View, ScrollView, Image } from 'react-native'

import { maps } from '../constants/maps'
import Colors from '../constants/Colors';

import QuadMap from '../components/maps/QuadMap'
import FloorMap from '../components/maps/FloorMap'
import UIScreenHeader from '../UIComponents/UIScreenHeader'
import UIStatusBarSpacer from '../UIComponents/UIStatusBarSpacer'

const MapsScreen = () => {
  return (
    <View style={{ flex: 1, backgroundColor: Colors.OFF_WHITE }}>
      <UIStatusBarSpacer/>
      <UIScreenHeader>Campus Maps</UIScreenHeader>
      <ScrollView style={{ flex: 1 }}>
        <View style={{ paddingHorizontal: 16 }}>
          <QuadMap/>
          {maps.map(map => (
            <FloorMap
              key={map.id} 
              building={map.building}
              floor={map.floor}
              map={map.map}
              link={map.link}
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

