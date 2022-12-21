import logo from './logo.svg';
import './App.css';
import { RouterProvider } from 'react-router-dom';
import { routes } from './Routes/Route/Route';

function App() {
  return (
    <div className='bg-light'>
      <RouterProvider router={routes}></RouterProvider>
     
    </div>
  );
}

export default App;
