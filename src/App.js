import './App.css';
import { RouterProvider } from 'react-router-dom';
import { routes } from './Routes/Route/Route';
import { Toaster } from 'react-hot-toast';

function App() {
  return (
    <div className='bg-light'>
      <RouterProvider router={routes}></RouterProvider>
      <Toaster></Toaster>
    </div>
  );
}

export default App;
