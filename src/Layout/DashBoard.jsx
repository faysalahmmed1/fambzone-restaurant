import { FaCartArrowDown, FaFileContract, FaHome, FaJediOrder, FaList, FaResolving, FaUser, FaUsers, FaUtensils } from "react-icons/fa";
import { FaBookJournalWhills, FaHouseMedical, FaRegUser } from "react-icons/fa6";
import { NavLink, Outlet } from "react-router-dom";
import { MdOutlineRestaurantMenu } from "react-icons/md";
import useCart from "../hooks/useCart";
import useAdmin from "../hooks/useAdmin";



const DashBoard = () => {
    const [cart] = useCart();
    const [isAdmin] = useAdmin();
    return (
        <div className="flex">
            <div className="w-64 min-h-screen bg-orange-100">
                <ul className="menu">
                    {
                        isAdmin ?
                            <>
                             <li>
                        <NavLink className='text-black' to={'dashboard/adminHome'}>
                            <FaHouseMedical></FaHouseMedical>
                            Admin Home</NavLink>
                    </li>
                    <li>
                        <NavLink className='text-black' to={'dashboard/additems'}>
                            <FaUtensils></FaUtensils>
                            Add Items</NavLink>
                    </li>
                    <li>
                        <NavLink className='text-black' to={'dashboard/manageitems'}>
                            <FaList></FaList>
                            Manage Items</NavLink>
                    </li>
                    <li>
                        <NavLink className='text-black' to={'dashboard/managebooking'}>
                            <FaResolving></FaResolving>
                            Manage Booking</NavLink>
                    </li>
                    <li>
                        <NavLink className='text-black' to={'dashboard/users'}>
                            <FaUsers></FaUsers>
                            All Users</NavLink>
                    </li>
                            </>
                            :
                            <>
                                <li>
                                    <NavLink className='text-black' to={'dashboard/user'}>
                                        <FaUser></FaUser>
                                        user</NavLink>
                                </li>
                                <li>
                                    <NavLink className='text-black' to={'dashboard/reservation'}>
                                        <FaRegUser></FaRegUser>
                                        Reservation</NavLink>
                                </li>
                                <li>
                                    <NavLink className='text-black' to={'dashboard/cart'}>
                                        <FaCartArrowDown></FaCartArrowDown>
                                        Cart ({cart.length})</NavLink>
                                </li>
                                <li>
                                    <NavLink className='text-black' to={'dashboard/review'}>
                                        <FaResolving></FaResolving>
                                        Review</NavLink>
                                </li>
                                <li>
                                    <NavLink className='text-black' to={'dashboard/booking'}>
                                        <FaBookJournalWhills></FaBookJournalWhills>
                                        My Booking</NavLink>
                                </li>
                            </>
                    }

                    <div className="divider divider-warning p-3">
                        or
                    </div>

                    <li>
                        <NavLink className='text-black' to={'/'}>
                            <FaHome></FaHome>
                            Home</NavLink>
                    </li>
                    <li>
                        <NavLink className='text-black' to={'/menu'}>
                            <MdOutlineRestaurantMenu />
                            Menu</NavLink>
                    </li>
                    <li>
                        <NavLink className='text-black' to={'/order/salad'}>
                            <FaJediOrder></FaJediOrder>
                            Food order</NavLink>
                    </li>
                    <li>
                        <NavLink className='text-black' to={'/contact'}>
                            <FaFileContract></FaFileContract>
                            Contact</NavLink>
                    </li>

                </ul>
            </div>
            <div className="flex-1 p-8">
                <Outlet></Outlet>
            </div>

        </div>
    );
};

export default DashBoard;