import React from 'react'
import { LinearGradient } from 'expo-linear-gradient';

const UIGradientCard = ({ style, children }) => {
  const gradientColors = ['rgba(226,174,218,1)', 'rgba(212,147,203,1)']
  const containerStyles = {
    flex: 0,
    padding: 12,
    borderRadius: 10,
    ...style
  }

  return (
    <LinearGradient colors={gradientColors} style={containerStyles}>
      {children}
    </LinearGradient>
  )
}

export default UIGradientCard