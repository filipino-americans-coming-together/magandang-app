import { AsyncStorage } from 'react-native';

import { FAVORITE_WORKSHOPS } from '../constants/StorageKeys'

export const storeFavoriteWorkshops = async (workshops) => {
  try {
    await AsyncStorage.setItem(FAVORITE_WORKSHOPS, JSON.stringify(workshops))
  } catch (e) {
    console.log('Saving Workshops Error')
    reject(new Error('Error saving favorited workshops.', e))
  }
}

export const getFavoriteWorkshops =  async () => {
  try {
    const workshops = await AsyncStorage.getItem(FAVORITE_WORKSHOPS)
    if (workshops !== null) {
      return JSON.parse(workshops)
  } else {
      return []
    }
  } catch(e) {
    console.log('Get Error')
    reject(new Error('Getting Workshops Error', e))
  }
}