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
import AllUsers from "../Pages/DashBoard/AllUsers/AllUsers.jsx";
import AddItems from "../Pages/DashBoard/AddItems/AddItems.jsx";
import AdminRoutes from "./AdminRoutes.jsx";
import ManageItems from "../Pages/DashBoard/ManageItems/ManageItems.jsx";
import UpdateItem from "../Pages/DashBoard/UpdateItem/UpdateItem.jsx";
import Payment from "../Pages/DashBoard/Payment/Payment.jsx";
import AdminHome from "../Pages/DashBoard/AdminHome/AdminHome.jsx";


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
        element: <PriveteRoutes><DashBoard></DashBoard></PriveteRoutes>,
        children: [

            // Normal users
            {
                path: '',
                element: <Cart></Cart>
            },
            {
                path: 'carts',
                element: <Cart></Cart>
            },

            {
                path: 'payment',
                element: <Payment></Payment>
            },

            {
                path: 'user',
                element: <UserHome></UserHome>
            },

            {
                path: 'reservation',
                element: <Reservation></Reservation>
            },

            {
                path: 'review',
                element: <Review></Review>
            },

            {
                path: 'booking',
                element: <Booking></Booking>
            },




            // Admin Site
            {
                path: 'adminHome',
                element: <AdminRoutes><AdminHome></AdminHome></AdminRoutes>
            },

            {
                path: 'users',
                element: <AdminRoutes><AllUsers></AllUsers></AdminRoutes>
            },
            {
                path: 'addItems',
                element: <AdminRoutes><AddItems></AddItems></AdminRoutes>
            },
            {
                path: 'manageitems',
                element: <AdminRoutes><ManageItems></ManageItems></AdminRoutes>
            },
            {
                path: 'updateitem/:id',
                element: <AdminRoutes><UpdateItem></UpdateItem></AdminRoutes>,
                loader: ({ params }) => fetch(`http://localhost:5000/menu/${params.id}`)
            }



        ]
    }
]);