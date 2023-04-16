import axios from "axios"

export const getUsers = async () => {
    try {
      const response = await axios.get('https://fakestoreapi.com/users')  
      return response.data  
    } catch(err) {
      console.log(err)
    }
  }
  