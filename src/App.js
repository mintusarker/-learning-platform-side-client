import './App.css';
import { RouterProvider } from 'react-router-dom';
import { routes } from './Routes/Route/Route';
import { Toaster } from 'react-hot-toast';

function App() {
  return (
    <div className=''>
      <RouterProvider router={routes}></RouterProvider>
      <Toaster position='bottom-center'></Toaster>
    </div>
  );
}

export default App;
