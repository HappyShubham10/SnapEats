import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider,} from "react-router-dom";
import Home from './pages/Home.jsx'
import Success from './pages/Success.jsx'
import Error from './components/Error.jsx';
import { Provider } from 'react-redux';
import Store from './store/Store.js';



const router=createBrowserRouter([
  {
    path:'/',
    element:<App/>,
    errorElement: <Error />,
    children:[
      {
        path:"/",
        element:<Home />
      },
      {
        path:"/success",
        element:<Success /> 
      }
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
  <Provider store={Store}>
   <RouterProvider router={router}/>
  </Provider>
  </StrictMode>,
)
