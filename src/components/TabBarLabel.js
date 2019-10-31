import React from 'react'

import { OpenSansLightText } from './StyledText';

import Colors from '../constants/Colors'

const TabBarLabel = ({ focused, title}) => {
  const styles = {
    fontSize: 12,
    color: focused ? Colors.PLUM : Colors.tabIconDefault,
    textAlign: 'center',
    paddingBottom: 5,
    marginHorizontal: 20
  }
  return (
    <OpenSansLightText style={styles}>{title}</OpenSansLightText>
  )
}

export default TabBarLabel