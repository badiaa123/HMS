import './App.css';

import { RouterProvider } from 'react-router-dom';
import router from './Router/Routes/Routes';
import { DataProvider } from './contexts/dataContext';  // Add this import
//function App() {
 // return (
 //   <div className='max-w-[1440px] mx-auto' data-theme='winter'>
 //     <RouterProvider router={router} />
 //   </div>
 // );
//}

function App() {
  return (
    <div className='max-w-[1440px] mx-auto' data-theme='winter'>
      <DataProvider>  {/* Wrap RouterProvider with DataProvider */}
        <RouterProvider router={router} />
      </DataProvider>
      
         
  
    </div>
  );
}

export default App;
