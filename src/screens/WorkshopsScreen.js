import React, { useState, useEffect } from 'react';
import { View, ScrollView, TouchableOpacity } from 'react-native';
import { OpenSansLightText } from '../components/StyledText'
import Colors from '../constants/Colors'

import { fetchAllWorkshops } from '../api/Client'
import { getFavoriteWorkshops, storeFavoriteWorkshops } from '../services/favoriteWorkshopsStore'

import UIStatusBarSpacer from '../components/UIStatusBarSpacer'
import UIActivityIndicator from '../components/UIActivityIndicator'
import Workshop from '../components/workshops/Workshop'
import UIScreenHeader from '../components/UIScreenHeader';

const FilterOption = ({ children, selected, handlePress }) => {
  return (
    <TouchableOpacity onPress={handlePress}>
      <View style={{
        padding: 10,
        margin: 3,
        borderWidth: 1,
        borderRadius: 8,
        backgroundColor: selected ? '#efefef' : Colors.WHITE,
        borderColor: selected ? '#bbbbbb' : '#dddddd',
      }}>
        <OpenSansLightText style={{
          color: selected ? '#555555' : '#444444'
        }}>{children}</OpenSansLightText>
      </View>
    </TouchableOpacity>
  )
}
const WorkshopsFilterOptions = ({ filter, setFilter }) => {
  const makeHandlePress = (filterOption) => () => {
    if (filter === filterOption) {
      setFilter('')
    } else {
      setFilter(filterOption)
    }
  } 
  return (
    <View style={{ paddingBottom: 12 }}>
      <ScrollView 
        horizontal={true} 
        showsHorizontalScrollIndicator={false} 
        style={{ flexDirection: 'row' }}
      >
        <FilterOption 
          handlePress={makeHandlePress('STARRED_WORKSHOPS')}
          selected={filter === 'STARRED_WORKSHOPS'}
        >Starred Workshops</FilterOption>
        <FilterOption 
          handlePress={makeHandlePress('WORKSHOP_SESSION_01')}
          selected={filter === 'WORKSHOP_SESSION_01'}
        >Session 1</FilterOption>
        <FilterOption 
          handlePress={makeHandlePress('WORKSHOP_SESSION_02')}
          selected={filter === 'WORKSHOP_SESSION_02'}
        >Session 2</FilterOption>
        <FilterOption 
          handlePress={makeHandlePress('WORKSHOP_SESSION_03')}
          selected={filter === 'WORKSHOP_SESSION_03'}
        >Session 3</FilterOption>
      </ScrollView>
    </View>
  )
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
      setFavoritedWorkshops(newWorkshops)
    } else {
      const newWorkshops = [...favoritedWorkshops, workshopId]
      setFavoritedWorkshops(newWorkshops)
    }
  }
  useEffect(() => {
    storeFavoriteWorkshops(favoritedWorkshops)
  })

  const [filter, setFilter] = useState('')
  const renderedWorkshops = workshops
    .filter(workshop => {
      switch(filter) {
        case 'STARRED_WORKSHOPS': {
          return favoritedWorkshops.includes(workshop.id)
        }
        case 'WORKSHOP_SESSION_01':
        case 'WORKSHOP_SESSION_02':
        case 'WORKSHOP_SESSION_03': {
          return workshop.session === filter
        }
        case '':
        default: {
          return true
        }
      }
    })
    .map(workshop => (
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
    <View style={{ flex: 1, backgroundColor: Colors.OFF_WHITE }}>
      <UIStatusBarSpacer/>
      <View style={{ flex: 1 }}>
        <UIScreenHeader>Workshops</UIScreenHeader>
        <WorkshopsFilterOptions filter={filter} setFilter={setFilter}/>
        <ScrollView style={{ flex: 1, paddingHorizontal: 16 }}>

          { isLoading ? (
            <UIActivityIndicator />
          ): renderedWorkshops}

        </ScrollView>
      </View>
    </View>
  );
}

WorkshopsScreen.navigationOptions = {
  header: null
};

export default WorkshopsScreen
