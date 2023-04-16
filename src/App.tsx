import { Users } from "./components/Users/Users";
import { useData } from "./useData";
import { findThisUserCart } from "./utils/cartUtils";
import { getHighestDistance } from "./utils/userUtils";
import { Carts } from "./components/Carts/Carts";
import { Products } from "./components/Products/Products";
import { GrouppedProducts } from "./components/GrouppedProducts/GrouppedProducts";


const App = () => {
  const {usersData, productsData, cartsData, isUsersLoading, isCartsLoading, isProductsLoading} = useData()
  if(isUsersLoading || isCartsLoading || isProductsLoading) return <div data-testid="loading">loading...</div>
  // jesli cos sie jeszcze laduje, to to na dole nie jest wywolywane
  
  const cartWithUser = findThisUserCart(cartsData, productsData, usersData)
  const highestDistance = getHighestDistance(usersData);

  console.log("UserLoading:",isUsersLoading)
  return (
    <div style={{display: 'flex', gap: '30px'}}>
      <Users usersData={usersData}/>
      <Carts cartsData={cartsData}/>
      <Products productsData={productsData}/>
      <GrouppedProducts productsData={productsData}/>
      <div style={{display: 'flex', flexDirection: 'column'}}>
        <div>RICHEST CUSTOMER :</div>
        <div>{cartWithUser.name}: {cartWithUser.sum}$
        </div>
      </div>
      <div style={{display: 'flex', flexDirection: 'column'}}>
        <div>Loneliest customers </div>
       <div>{highestDistance[0].firstUser.firstname} {highestDistance[0].firstUser.lastname}, {highestDistance[0].secondUser.firstname} {highestDistance[0].secondUser.lastname}: {highestDistance[0].distance}</div>
      </div>
    </div>
  )
}

export default App