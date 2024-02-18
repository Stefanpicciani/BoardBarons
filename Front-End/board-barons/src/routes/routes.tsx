import { createBrowserRouter } from 'react-router-dom';
import Home from '../pages/home/Home';
import Signin from '../pages/signin/Signin';
import SignUpSide from '../pages/signup/Signup';
import Dashboard from '../pages/dashboard/Dashboard';

const Routes = createBrowserRouter([
     { path: "/", element: <Home/>},
     { path: "/auth/signin", element: <Signin/>},
     { path: "/auth/signup", element: <SignUpSide/>},
     { path: "/dashboard", element: <Dashboard/>}
       
     
     // { 
     //      path: "/", 
     //      element: <Home/>,
     //      children: [
     //         { path: "/auth/signin", element: <Signin/> } ,
     //         { path: "/auth/signup", element: <SignUpSide/> } ,
     //      ],
     //    } ,
    
]);

export default Routes;

 
