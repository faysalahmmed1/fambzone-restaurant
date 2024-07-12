import {
    createBrowserRouter,

} from "react-router-dom";

import Home from "../Pages/Home/Home/Home";
import Main from "../Layout/Main.jsx";
import Menu from "../Pages/Menu/Menu/Menu.jsx";
import Order from "../Pages/Order/Order/Order.jsx";
import Contacts from "../Components/Contacts/Contacts.jsx";
import Deshboard from "../Components/Deshboard/Deshboard.jsx";
import Login from "../Pages/Login/Login/Login.jsx";
import SignUp from "../Pages/SignUp/SignUP/SignUp.jsx";
import PriveteRoutes from "./PriveteRoutes.jsx";
import Secret from "../Pages/Shared/Secret/Secret.jsx";


export const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
            },

            {
                path: '/menu',
                element: <Menu></Menu>
            },
            {
                path: 'order/:cetegory',
                element: <Order></Order>
            },
            {
                path: '/contact',
                element: <Contacts></Contacts>
            },
            {
                path: '/deshboard',
                element: <Deshboard></Deshboard>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/signup',
                element: <SignUp></SignUp>
            },
            {
                path: '/secret',
                element: <PriveteRoutes><Secret></Secret></PriveteRoutes>
            }
        ]
    },
]);