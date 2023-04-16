import { render, screen } from '@testing-library/react';
import { Products } from './Products';


describe('Testing Product component', () => {

  test('Products are being rendered', () => {
    const mockProduct = [
       
      {
        title: "Mens Casual Premium Slim Fit T-Shirts",
      },
      {
        title: "White Gold Plated Princess",
      },
    ]

    render(  
      <Products productsData={mockProduct} /> )
    
    expect(screen.getByTestId('products')).toHaveTextContent('Products');
    expect(screen.getAllByTestId('productTitle')).toHaveLength(2);
  });
 

});