import React from 'react';
import { Ionicons } from '@expo/vector-icons';

import Colors from '../constants/Colors';

const TabBarIcon = (props) => {
  return (
    <Ionicons
      name={props.name}
      size={26}
      color={props.focused ? Colors.PLUM : Colors.tabIconDefault}
    />
  )
}
export default TabBarIcon