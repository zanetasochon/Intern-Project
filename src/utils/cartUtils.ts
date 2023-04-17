import { IProduct } from "../types/product.types";
import { ICartProduct } from "../types/product.types";
import { ISumCarts } from "../types/product.types";
import { ICart } from "../types/product.types";
import { IUser } from "../types/product.types";





const sumCarts = (data: any, products: IProduct[]) => {
    const carts: ISumCarts[] = [];
    data.map((cart: ICart) => {
        let tempArr = [];
        tempArr = cart.products.map((product: ICartProduct) => {
            const priceOfThisCartProduct = products[product.productId - 1].price
            const totalPrice = priceOfThisCartProduct * product.quantity
            
            return totalPrice
          
        })
        const summedCart = tempArr.reduce((a: number, b: number) => a + b, 0)
        carts.push({id: cart.id, sum: summedCart})
    })
    return carts
}

export const findThisUserCart = (data: any, products: IProduct[], users: any) => {
    const summedCarts = sumCarts(data, products)
    const highestSum = Math.max(...summedCarts.map((obj) => obj.sum))
    const tempCart = summedCarts.find((cart: ISumCarts) => {
      if(cart.sum === highestSum) return cart.id
  
    })
    const cartWithHighestVal = data.find((cart: ICart) => {
      if(cart.id === tempCart?.id) return cart
    })
    const cartOwner = users.find((user: IUser) => {
      if(user.id === cartWithHighestVal.userId) 
        return `${user.name.firstname} ${user.name.lastname}`
       
    }) 
    const cartWithUser = {
      name: `${cartOwner.name.firstname} ${cartOwner.name.lastname}`,
      sum: tempCart?.sum
    }
    
    return cartWithUser
}

