import React, { useState, useEffect } from 'react';
import { View, ScrollView } from 'react-native';
import { OpenSansLightText } from '../components/StyledText'
import { Ionicons } from '@expo/vector-icons';

import { fetchAllWorkshops } from '../api/Client'

import Workshop from '../components/workshops/Workshop'

const WorkshopsScreenHeader = () => {
  return (
    <View style={{ flex: 0, flexDirection: 'row', paddingHorizontal: 10, paddingTop: 30, }}>
      <View style={{ flex: 1}}>
        <View style={{ flex: 1, flexDirection: 'column', justifyContent: 'center'}}>
          <OpenSansLightText style={{ flex: 0, fontSize: 24 }}>All Workshops</OpenSansLightText>
        </View>
      </View>
      <View style={{ flex: 0, flexDirection: 'row', padding: 12}}>
        <Ionicons style={{ flex: 0 }} name="ios-funnel" size={30} color="#bbbbbb" />
      </View>
    </View>
  )
}

const scrollContainerStyles = {
  flex: 1,
  backgroundColor: '#fff',
  paddingTop:40,
}

const WorkshopsScreen = () => {
  const [workshops, setWorkshops] = useState([])
  useEffect(() => {
    fetchAllWorkshops()
      .then(res => setWorkshops(res.data.workshops))
  }, [])

  const [favoritedWorkshops, setFavoritedWorkshops] = useState([])
  const makeToggleFavorited = (workshopId) => () => {
    if (favoritedWorkshops.includes(workshopId)) {
      const idx = favoritedWorkshops.indexOf(workshopId)
      setFavoritedWorkshops([
        ...favoritedWorkshops.slice(0, idx),
        ...favoritedWorkshops.slice(idx + 1)
      ])
    } else {
      setFavoritedWorkshops([...favoritedWorkshops, workshopId])
    }
  }
  const renderedWorkshops = workshops.map(workshop => (
    <Workshop 
      key={workshop.id} 
      workshop={workshop} 
      isFavorited={favoritedWorkshops.includes(workshop.id)}
      toggleFavorited={makeToggleFavorited(workshop.id)}
    />
  ))

  return (
    <View style={{ flex: 1, marginHorizontal: 10 }}>
      <ScrollView style={scrollContainerStyles}>
        <WorkshopsScreenHeader/>
        {renderedWorkshops}
      </ScrollView>
    </View>
  );
}

WorkshopsScreen.navigationOptions = {
  header: null
};

export default WorkshopsScreen
