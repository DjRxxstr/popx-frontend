import CreateAccount from "./pages/CreateAccount";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import Root from "./pages/Root";
import SignIn from "./pages/SignIn";

import { createBrowserRouter,
         RouterProvider 
        } from 'react-router-dom';

const router = createBrowserRouter([
  {path: '/', 
   element: <Root/>,
   children:[
    {index: true, element:<Home/>},
    {path: 'create-account', element:<CreateAccount/>},,
    {path: 'login', element: <SignIn/>},
    {path: 'profile', element: <Profile/>}
  ]}
])


export default function App() {
  return (<>
  <RouterProvider router={router}/>
  </>);
}
