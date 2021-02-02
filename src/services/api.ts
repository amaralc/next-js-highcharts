import axios from 'axios'

const api = axios.create({
  baseURL: 'https://cdn.jsdelivr.net'
})

export default api
