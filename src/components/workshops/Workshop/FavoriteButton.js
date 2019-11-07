import React from 'react'
import { View, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const FavoriteButton = ({ isFavorited, toggleFavorited }) => {
  const containerStyles = {
    flex: 0,
    paddingLeft: 12
  }
  const verticallyCenterStyles = {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center'
  }
  return (
    <TouchableOpacity onPress={toggleFavorited}>
      <View style={verticallyCenterStyles}>
        <View style={containerStyles}>
          <View style={{ flex: 0 }}>
            <Ionicons name={ isFavorited ? 'ios-star' : 'ios-star-outline'} size={30} color="#bbbbbb" />
          </View>
        </View>
      </View>
    </TouchableOpacity>
  )
} 

export default FavoriteButton