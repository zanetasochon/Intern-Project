import { Users } from "./components/Users/Users";
import { useData } from "./useData";
import { Carts } from "./components/Carts/Carts";
import { Products } from "./components/Products/Products";
import { GrouppedProducts } from "./components/GrouppedProducts/GrouppedProducts";
import { RichestCustomer } from "./components/RichestCustomer/RichestCustomer";
import { LoneliestCustomers } from "./components/LoneliestCustomers/LoneliestCustomers";


const App = () => {
  const {usersData, productsData, cartsData, isUsersLoading, isCartsLoading, isProductsLoading} = useData()
  if(isUsersLoading || isCartsLoading || isProductsLoading) return <div  data-testid="loading">loading...</div>
  // Jeśli coś się jeszcze ładuje, to informacje na dole nie są jeszcze wywolywane
  

  return (
    <div style={{display: 'flex', gap: '30px', marginLeft: '60px', marginRight: '60px'}}>
      <Users usersData={usersData}/>
      <Carts cartsData={cartsData}/>
      <Products productsData={productsData}/>
      <GrouppedProducts productsData={productsData}/>
      <RichestCustomer cartsData={cartsData} usersData={usersData} productsData={productsData}/>
      <LoneliestCustomers usersData={usersData}/>
    </div>
  )
}

export default App