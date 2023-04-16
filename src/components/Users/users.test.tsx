import { render, screen } from '@testing-library/react';
import { Users } from './Users';


describe('Testing Users Component', () => {

  test('Emails are being rendered', () => {
    const mockUsers = [
       
      {
        email: "test@wp.pl",
      },
      {
        email: "test@wp.pl",
      }
    ]

    render(  
      <Users usersData={mockUsers} /> )
    
    expect(screen.getByTestId('users')).toHaveTextContent('Users');
    expect(screen.getAllByTestId('singleUser')).toHaveLength(2);
  });
 

});