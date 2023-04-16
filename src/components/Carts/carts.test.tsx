import { render, screen } from '@testing-library/react';
import { Carts } from './Carts';


describe('Testing carts component', () => {

  test('Display single cart id, user id', () => {
    const mockCarts = [
       
      {
        cartId: "1234",
      },
      {
        userId: "5678",
      }
    ]

    render(  
      <Carts cartsData={mockCarts} /> )
    
    expect(screen.getByTestId('carts')).toHaveTextContent('Carts');
    expect(screen.getAllByTestId('CartId, UserId')).toHaveLength(2);
  });
 

});