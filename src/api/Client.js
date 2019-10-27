const PROD_URL = 'https://us-central1-fact-2019-fb6b0.cloudfunctions.net/app'
const LOCAL_URL = 'http://localhost:5001/fact-2019-fb6b0/us-central1/app'

const API_BASE = true ? PROD_URL : LOCAL_URL 

export function fetchAllWorkshops() {
  return fetch(`${API_BASE}/workshops/all`, {
    method: 'GET'
  }).then(res => res.json())
}

export function fetchUpdates() {
  return fetch(`${API_BASE}/updates/all`, {
    method: 'GET'
  }).then(res => res.json())
}

export function postNotificationToken(token) {
  return fetch(`${API_BASE}/notifications/tokens`, {
    method: 'POST',
    body: {
      token
    }
  }).then(res => res.json())

}