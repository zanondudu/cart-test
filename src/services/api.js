import axios from 'axios'

const api = axios.create({
  baseURL: "https://cart-test-api.herokuapp.com",
})

export default api