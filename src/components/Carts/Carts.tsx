import { render, screen } from '@testing-library/react';
// import '@testing-library/jest-dom/extend-expect';
import { ICart } from '../../types/product.types';


export const Carts = ({cartsData}) => {
  return (
    <div style={{display: 'flex', flexDirection: 'column'}}>
        <div data-testid="carts">Carts</div>
        {cartsData.map((cart: ICart) => {

          return <div data-testid="CartId, UserId">CART ID:{cart.id} USER ID: {cart.userId}</div>
        })}
      </div>
  )
}
