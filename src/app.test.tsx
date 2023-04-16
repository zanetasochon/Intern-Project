import { render, screen, cleanup } from '@testing-library/react';
import App from './App';
import { QueryClient, QueryClientProvider } from 'react-query';


const queryClient = new QueryClient();
describe('Testing App page', () => {

  test('loading should appear', () => {
    render(  <QueryClientProvider client={queryClient}>
      <App />
    </QueryClientProvider>);
    expect(screen.getByTestId('loading')).toHaveTextContent('loading...');
  });

});
