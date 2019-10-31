import React from 'react'
import { Linking, TouchableOpacity } from 'react-native'

import { OpenSansLightText } from '../components/StyledText'

const POLICY_LINK = 'https://app.termly.io/document/privacy-policy/3cde0cdd-d856-44ec-b96a-dcecabd6665e'
const PrivacyPolicyLink = () => {
  const handlePress = () => {
    Linking.openURL(POLICY_LINK)
  }
  return (
    <TouchableOpacity 
      style={{
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        marginTop: 20,
        padding: 20
      }}
      onPress={handlePress}
    >
      <OpenSansLightText style={{ color: '#0080ff'}}>View our Privacy Policy</OpenSansLightText>
    </TouchableOpacity>
  )
}

export default PrivacyPolicyLink