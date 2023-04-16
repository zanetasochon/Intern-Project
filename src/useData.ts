import { useQuery } from "react-query"
import { getUsers } from "./services/userService"
import { getCarts } from "./services/cartService"
import { getProducts } from "./services/productsService"


export const useData = () => {
    
    const {data: usersData, isLoading: isUsersLoading} = useQuery("users", getUsers)
    const {data: cartsData, isLoading: isCartsLoading} = useQuery("carts", getCarts)
    const {data: productsData, isLoading: isProductsLoading} = useQuery("products", getProducts)
    
    return {usersData, isUsersLoading, cartsData, isCartsLoading, productsData, isProductsLoading}
}