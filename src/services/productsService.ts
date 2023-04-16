import axios from "axios";

export const getProducts = async () => {
    try {
      const response = await axios.get('https://fakestoreapi.com/products')
      return response.data
    } catch(err) {
      console.log(err)
    }
  }