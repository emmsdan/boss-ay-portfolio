import $http, { $httpP } from './$http'
import qs from 'querystring'

export const fetchPortfolio = (query = {}) => {
  return $http.get('/projects?' + qs.stringify(query))
}
export const fetchWakaTimeList = () => {
  const wakeTime = {
    sevenDays: 'https://wakatime.com/share/@emmsdan/9e153e63-b626-49f1-bd9d-29cf8f5f1c0a.json',
    allTime: 'https://wakatime.com/share/@emmsdan/f70ff538-fabe-4efd-988f-f41a7efd53f8.json'
  }
  return $httpP(wakeTime.allTime)
}
