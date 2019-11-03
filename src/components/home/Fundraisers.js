import React from 'react'
import { View, Image, TouchableOpacity, Linking } from 'react-native'

import Color from '../../constants/Colors'
import FundraisersList from '../../constants/Fundraisers'

import { 
  OpenSansBoldText,
  OpenSansRegularText,
  OpenSansSemiboldText
} from '../StyledText'
import UIScreenHeader from '../../UIComponents/UIScreenHeader'
import UIGradientCard from '../../UIComponents/UIGradientCard'

const FundraiserEvent = ({ title, time, link, description, image}) => {
  const handlePress = () => {
    if (link) {
      Linking.openURL(link)
    }
  }

  return (
    <UIGradientCard style={{
      marginBottom: 10,
      padding: 15,
      paddingBottom: 25
    }}>
      <OpenSansBoldText style={{
        color: Color.WHITE,
        fontSize: 17,
        paddingBottom: 2
      }}>{title}</OpenSansBoldText>
      <OpenSansSemiboldText style={{
        color: Color.OFF_WHITE,
        fontSize: 17,
        paddingBottom: 6
      }}>{time}</OpenSansSemiboldText>
      <TouchableOpacity
    onPress={handlePress}
  >
      <View style={{
        flex: 1,
        height: 200,
        marginVertical: 10
      }}>
        <Image 
          source={image}
          style={{
            flex: 1,
            width: '100%',
            borderRadius: 10
          }}  
          resizeMode='contain'
          />
      </View>
      </TouchableOpacity>
      <OpenSansRegularText style={{
        color: Color.WHITE,
        fontSize: 15
      }}>
        {description}
      </OpenSansRegularText>
    </UIGradientCard>
  )
}

const Fundraisers = () => {
  return (
    <View>
      <UIScreenHeader>Fundraisers</UIScreenHeader>
      <View style={{ paddingHorizontal: 16 }}>
        {
          FundraisersList.map(fundraiser => (
            <FundraiserEvent 
              key={fundraiser.title}
              title={fundraiser.title}
              time={fundraiser.time}
              link={fundraiser.link}
              description={fundraiser.description}
              image={fundraiser.image}
            />
          ))
        }
      </View>
    </View>
  )
}

export default Fundraisers