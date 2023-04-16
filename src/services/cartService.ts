import axios from "axios"

export const getCarts = async () => {
    try {
      const response = await axios.get('https://fakestoreapi.com/carts/?startdate=2000-01-01&enddate=2023-04-07')
      return response.data

    } catch(err) {
      console.log(err)
    }
  }