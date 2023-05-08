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

export const fetchSkillsList = () => {
  const list = [
    {
      name: 'Project Management',
      color: '#FFC107'
    },
    {
      name: 'Web Development',
      color: '#FF5722'
    },
    {
      name: 'UI/UX Design',
      color: '#673AB7'
    },
    {
      name: 'Microsoft Azure',
      color: '#2196F3'
    },
    {
      name: 'Google Cloud Platform'
    },
    {
      name: 'DevOps',
      color: '#009688'
    },
    {
      name: 'Public Speaking',
      color: '#4CAF50'
    },
    {
      name: 'Leadership',
      color: '#FF9800'
    }
  ]
  return {
    async json () {
      return { data: list }
    }
  }
}
