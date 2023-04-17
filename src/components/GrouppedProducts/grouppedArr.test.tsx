import { render, screen } from '@testing-library/react';
import { GrouppedProducts } from './GrouppedProducts';


describe('Testing GrouppedProducts component', () => {

  test('GrouppedProducts are being rendered', () => {
    const mockGrouppedProducts = [
       
      {
        category: "Jewellery",
      },
      {
        sum: 245,
      },
      {
        quantity: 3,
      },
    ]

    render(  
      <GrouppedProducts productsData={mockGrouppedProducts} /> )
    
    expect(screen.getByTestId('grouppedProducts')).toHaveTextContent('Groupped Products');
    expect(screen.getAllByTestId('productCategory, productSum, productQTY')).toHaveLength(2);
  });
 

});