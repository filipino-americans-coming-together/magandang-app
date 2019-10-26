import React from 'react';
import { View } from 'react-native'
import Constants from 'expo-constants';

import Colors from '../constants/Colors'

import { OpenSansLightText } from '../components/StyledText'
const MapsScreenHeader = () => (
  <View style={{ paddingVertical: 12, paddingHorizontal: 10 }}>
    <OpenSansLightText style={{ fontSize: 24 }}>Campus Maps</OpenSansLightText>
  </View>
)
const MapsScreen = () => (
  <View>
    <View style={{
        backgroundColor: Colors.PLUM,
        height: Constants.statusBarHeight,
    }} />
    <MapsScreenHeader/>
    
  </View>
)

MapsScreen.navigationOptions = {
  header: null,
};

export default MapsScreen
