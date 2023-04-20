import { access_token } from './../constant'
import axios, { AxiosRequestConfig } from 'axios'
import { getCookie, setCookie } from '../utils/cookie'

const baseURL = 'http://localhost:5000/'

const axiosClient = axios.create({
  baseURL,
  headers: {
    'content-type': 'application/json',
    'Device-Type': 'Webapp'
  }
})

axiosClient.interceptors.request.use(async (config: any) => {
  const AuthenToken = getCookie(access_token) || undefined

  if (AuthenToken) {
    config.headers.Authorization = `Bearer ${AuthenToken}`
  }
  return config
})

axiosClient.interceptors.response.use(
  (response) => {
    if (response && response.data) {
      return response.data
    }

    return response
  },
  (error) => {
    // Handle errors
    let errorMessage = error
    if (error.response) {
      const originalRequest = error.config
      if (error.response.status === 403) {
      }

      errorMessage = error.response.data ? error.response.data.error : error.response.data
    }
    throw error
  }
)

export default axiosClient
