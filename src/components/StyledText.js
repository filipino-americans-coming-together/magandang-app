import React from 'react';
import { Text } from 'react-native';

export function MonoText(props) {
  return (
    <Text {...props} style={[props.style, { fontFamily: 'space-mono' }]} />
  );
}

export const MoamText = (props) => (
  <Text {...props} style={[props.style, { fontFamily: 'moam'}]} />
)

export const OpenSansLightText = (props) => (
  <Text {...props} style={[props.style, { fontFamily: 'OpenSans-Light'}]} />
)

export const OpenSansBoldText = (props) => (
  <Text {...props} style={[props.style, { fontFamily: 'OpenSans-Bold'}]} />
)

export const OpenSansBoldItalicText = (props) => (
  <Text {...props} style={[props.style, { fontFamily: 'OpenSans-BoldItalic'}]} />
)

export const OpenSansExtraBoldText = (props) => (
  <Text {...props} style={[props.style, { fontFamily: 'OpenSans-ExtraBold'}]} />
)

export const OpenSansExtraBoldItalicText = (props) => (
  <Text {...props} style={[props.style, { fontFamily: 'OpenSans-ExtraBoldItalic'}]} />
)

export const OpenSansItalicText = (props) => (
  <Text {...props} style={[props.style, { fontFamily: 'OpenSans-Italic'}]} />
)

export const OpenSansLightItalicText = (props) => (
  <Text {...props} style={[props.style, { fontFamily: 'OpenSans-LightItalic'}]} />
)

export const OpenSansRegularText = (props) => (
  <Text {...props} style={[{ fontSize: 15 }, props.style, { fontFamily: 'OpenSans-Regular'}]} />
)

export const OpenSansSemiboldText = (props) => (
  <Text {...props} style={[props.style, { fontFamily: 'OpenSans-Semibold'}]} />
)

export const OpenSansSemiboldItalicText = (props) => (
  <Text {...props} style={[props.style, { fontFamily: 'OpenSans-SemiboldItalic'}]} />
)

export const QuandcoText = (props) => (
  <Text {...props} style={[props.style, { letterSpacing: 4.5, fontFamily: 'Quandco'}]} />
)

