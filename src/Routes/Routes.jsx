import {
    createBrowserRouter,

} from "react-router-dom";

import Home from "../Pages/Home/Home/Home";
import Main from "../Layout/Main.jsx";
import Menu from "../Pages/Menu/Menu/Menu.jsx";
import Order from "../Pages/Order/Order/Order.jsx";
import Contacts from "../Components/Contacts/Contacts.jsx";
import Login from "../Pages/Login/Login/Login.jsx";
import SignUp from "../Pages/SignUp/SignUP/SignUp.jsx";
import PriveteRoutes from "./PriveteRoutes.jsx";
import Secret from "../Pages/Shared/Secret/Secret.jsx";
import DashBoard from "../Layout/DashBoard.jsx";
import Cart from "../Pages/DashBoard/Cart/Cart.jsx";
import UserHome from "../Pages/DashBoard/UserHome/UserHome.jsx";
import Reservation from "../Pages/DashBoard/Reservation/Reservation.jsx";
import Review from "../Pages/DashBoard/Review/Review.jsx";
import Booking from "../Pages/DashBoard/Booking/Booking.jsx";


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
    {
        path: "/dashboard",
        element: <DashBoard></DashBoard>,
        children: [
            {
                path: 'dashboard/user',
                element: <UserHome></UserHome>
            },
            {
                path: 'dashboard/reservation',
                element: <Reservation></Reservation>
            },
            {
                path: 'dashboard/cart',
                element: <Cart></Cart>
            },

            {
                path: 'dashboard/review',
                element: <Review></Review>
            },
            {
                path: 'dashboard/booking',
                element: <Booking></Booking>
            }


        ]
    }
]);