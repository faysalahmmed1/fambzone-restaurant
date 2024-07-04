import {
    createBrowserRouter,
    
} from "react-router-dom";

import Home from "../Pages/Home/Home/Home";
import Main from "../Layout/Main.jsx";
import Menu from "../Pages/Menu/Menu/Menu.jsx";




export const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        children: [
            {
                path:'/',
                element:<Home></Home>,
            },
            {
                path:'/menu',
                element:<Menu></Menu>
            }
        ]
    },
]);