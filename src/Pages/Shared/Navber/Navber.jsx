import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../Provider/AuthProvider";
import { FaShoppingCart } from "react-icons/fa";
import useCart from "../../../hooks/useCart";
import useAdmin from "../../../hooks/useAdmin";


const Navber = () => {
    const { user, logOut } = useContext(AuthContext);
    const [isAdmin] = useAdmin();
    const [cart] = useCart();
    const handleLogOut = () => {
        logOut()
            .then(() => { })
            .catch(error => console.log(error))
    }

    const navOption = <>
        <li><Link to={'/'}>Home</Link></li>
        <li><Link to={'/contact'}>Contacts Us</Link> </li>
        <li><Link to={'/menu'}>Our Menu</Link></li>
        <li><Link to={'/secret'}>My Order</Link></li>
        <li><Link to={'/order/salad'}>Food Order</Link></li>

        {
            user && isAdmin && <li><Link to={'dashboard/adminHome'}></Link></li>
        }
        {
            user && !isAdmin && <li><Link to={'dashboard/userHome'}></Link></li>
        }



        {
            user ?
                <>

                    <button onClick={handleLogOut} className="btn btn-active btn-ghost">LogOut</button>
                </>
                :
                <>
                    <li><Link to={'/login'}>Login</Link>
                    </li></>
        }
    </>

    return (
        <>
            <div className="navbar z-10  fixed bg-opacity-40 max-w-screen-xl  bg-black text-white ">
                <div className="navbar-start">
                    <div className="dropdown lg:hidden">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor">
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h8m-8 6h16" />
                            </svg>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                            {navOption}
                        </ul>
                    </div>
                    <a className="btn btn-ghost text-xl">FambZone</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {navOption}
                    </ul>
                </div>
                <div className="navbar-end">
                    <>
                        {
                            user ? <>{user?.displayName}</> : <></>
                        }

                    </>
                    <li>
                        <Link to={'/dashboard'}>
                            <button className="btn">
                                <FaShoppingCart />
                                <div className="badge badge-secondary">+${cart.length}</div>
                            </button>
                        </Link>
                    </li>
                </div>
            </div>
        </>
    );
};

export default Navber;