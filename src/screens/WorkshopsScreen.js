import React, { useState, useEffect } from 'react';
import { ActivityIndicator, View, ScrollView, Modal } from 'react-native';
import { OpenSansLightText } from '../components/StyledText'
import { Ionicons } from '@expo/vector-icons';

import { fetchAllWorkshops } from '../api/Client'
import { getFavoriteWorkshops, storeFavoriteWorkshops } from '../services/favoriteWorkshopsStore'

import UIActivityIndicator from '../components/UIActivityIndicator'
import Workshop from '../components/workshops/Workshop'

const WorkshopsScreenHeader = () => {
  return (
    <View style={{ flex: 0, flexDirection: 'row', paddingTop: 30, }}>
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
  useEffect(() => {
    getFavoriteWorkshops()
      .then(res => setFavoritedWorkshops(res))
  }, [])

  const makeToggleFavorited = (workshopId) => () => {
    if (favoritedWorkshops.includes(workshopId)) {
      const idx = favoritedWorkshops.indexOf(workshopId)
      const newWorkshops = [
        ...favoritedWorkshops.slice(0, idx),
        ...favoritedWorkshops.slice(idx + 1)
      ]
      setFavoritedWorkshops(newWorkshops,
      storeFavoriteWorkshops(newWorkshops))
    } else {
      const newWorkshops = [...favoritedWorkshops, workshopId]
      setFavoritedWorkshops(newWorkshops,
        storeFavoriteWorkshops(newWorkshops))
    }
  }

  const renderedWorkshops = workshops.map(workshop => (
    <Workshop 
      key={workshop.id} 
      workshop={workshop} 
      showFavoriteButton={true}
      isFavorited={favoritedWorkshops.includes(workshop.id)}
      toggleFavorited={makeToggleFavorited(workshop.id)}
    />
  ))

  const isLoading = workshops.length === 0
  return (
    <View style={{ flex: 1, marginHorizontal: 10 }}>
      <ScrollView style={scrollContainerStyles}>
        <WorkshopsScreenHeader/>
        { isLoading ? (
          <UIActivityIndicator />
        ): renderedWorkshops}
      </ScrollView>
    </View>
  );
}

WorkshopsScreen.navigationOptions = {
  header: null
};

export default WorkshopsScreen
