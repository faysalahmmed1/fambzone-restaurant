import { FaCartArrowDown, FaFileContract, FaHome, FaJediOrder, FaResolving, FaUser } from "react-icons/fa";
import { FaBookJournalWhills, FaRegUser} from "react-icons/fa6";
import { NavLink, Outlet } from "react-router-dom";
import { MdOutlineRestaurantMenu } from "react-icons/md";
import useCart from "../hooks/useCart";



const DashBoard = () => {
    const [cart ]= useCart();
    return (
        <div className="flex">
            <div className="w-64 min-h-screen bg-orange-100">
                <ul className="menu">
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