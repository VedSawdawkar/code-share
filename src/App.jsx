import './App.css'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Navigation from './components/NavigationBar/Navigation'
import Card from './components/Card';
import SearchBar from './components/SearchBar/SearchBar';
import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import PasteComponent from './components/Paste/PasteComponent.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <div><Navigation />
    <ToastContainer
        position="top-right"
        autoClose={5000}
        limit={1}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss={false}
        draggable
        pauseOnHover
        theme="dark"
       />
      <Card /></div>
  },
  
  {
    path: "/paste",
    element: <PasteComponent />,
  }
]);


function App() {
  return (
   <div>
    <RouterProvider router={router} />
   </div>
  )
}

export default App
