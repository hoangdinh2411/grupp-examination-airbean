import { getDataOnSession } from './helper'

const API_BASE_URL = 'https://airbean.awesomo.dev/api/'
const fetching = async (url = '', method, data = '') => {
  const token = getDataOnSession('token')
  const res = await fetch(API_BASE_URL + url, {
    method: method,
    headers: {
      'Content-Type': 'application/json',
      accept: 'application/json',
      Authorization: token ? `Bearer ${token}` : '',
    },
    body: method !== 'GET' ? JSON.stringify(data) : null,
  })

  return res.json()
}

export default fetching
