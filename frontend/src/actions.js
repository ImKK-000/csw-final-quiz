import axios from 'axios'
const TEST_URL = 'http://localhost:9999/api/countries'
export const FETCH_COUNTRIES = 'fetch_counties'

export const fetchCounties = () => {
  const response = axios.get(`${TEST_URL}`)
  return {
    type: FETCH_COUNTRIES,
    payload: response
  }
}

export const createCountry = (value) => {
  const response = axios.post(`${TEST_URL}`, value)
  return {
    type: FETCH_COUNTRIES,
    payload: response
  }
}

export const deleteCountry = (id) => {
  const response = axios.delete(`${TEST_URL}/${id}`)
  return {
    type: FETCH_COUNTRIES,
    payload: response
  }
}
