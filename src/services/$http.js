import Axios from 'axios'
import fetchJsonp from 'fetch-jsonp'
const $http = Axios.create({
  baseURL: process.env.VUE_APP_API_URL
})

export const $httpP = fetchJsonp
export const axios = Axios
export default $http
