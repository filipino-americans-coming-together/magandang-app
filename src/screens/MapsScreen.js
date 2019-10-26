import React from 'react';
import { View } from 'react-native'

import UIScreenHeader from '../components/UIScreenHeader'
import UIStatusBarSpacer from '../components/UIStatusBarSpacer'

const MapsScreen = () => (
  <View>
    <UIStatusBarSpacer/>
    <UIScreenHeader>Campus Maps</UIScreenHeader>
    
  </View>
)

MapsScreen.navigationOptions = {
  header: null,
};

export default MapsScreen
