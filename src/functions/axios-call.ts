import axios from 'axios'

export const axiosCall = async() => {
  const response = await axios.get('https://jsonplaceholder.typicode.com/todos/1')
  return response.data
}