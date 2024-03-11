import axios from 'axios'

export const instance = axios.create({
  baseURL: process.env.GATSBY_API_URL,
  timeout: 1000
})

