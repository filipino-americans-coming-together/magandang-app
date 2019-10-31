import React from 'react';
import { View, ScrollView, Image } from 'react-native'

import { maps } from '../constants/maps'
import Colors from '../constants/Colors';

import Map from '../components/maps/Map'
import UIScreenHeader from '../UIComponents/UIScreenHeader'
import UIStatusBarSpacer from '../UIComponents/UIStatusBarSpacer'

const MapsScreen = () => {
  return (
    <View style={{ flex: 1, backgroundColor: Colors.OFF_WHITE }}>
      <UIStatusBarSpacer/>
      <UIScreenHeader>Campus Maps</UIScreenHeader>
      <ScrollView style={{ flex: 1 }}>
        <View style={{ paddingHorizontal: 16 }}>
          {maps.map(map => (
            <Map 
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

