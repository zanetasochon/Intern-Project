import { findThisUserCart } from "../../utils/cartUtils";

export const RichestCustomer = ({cartsData, productsData, usersData}) => {
  const cartWithUser = findThisUserCart(cartsData, productsData, usersData)

  return (
    <div style={{display: 'flex', flexDirection: 'column'}}>
    <div>RICHEST CUSTOMER :</div>
    <div>{cartWithUser.name}: {cartWithUser.sum}$
    </div>
  </div>
  )
}
