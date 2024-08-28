import React from 'react';
import useCart from '../../../hooks/useCart';
import SectionTitle from '../../../Components/SectionTitle/SectionTitle';
import { FaTrashAlt } from 'react-icons/fa';
import Swal from 'sweetalert2';
import useAxiosSecoure from '../../../hooks/useAxiosSecoure';
import { Link } from 'react-router-dom';

const Cart = () => {
    const [cart, refetch] = useCart();
    console.log(cart)
    const totalprice = cart.reduce((total, item) => total + item.price, 0)
    const axiosSecoure = useAxiosSecoure();
    const handleDeleteCart = (id) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                axiosSecoure.delete(`/carts/${id}`)
                    .then(res => {
                        if (res.data.deletedCount) {
                            refetch();
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your file has been deleted.",
                                icon: "success"
                            });
                        }
                    })
            }

        });

    }
    return (
        <div>
            <div className='text-center'>
                <SectionTitle
                    subHeding={''}
                    heading={'Your All Cart'}
                ></SectionTitle>
            </div>

            <div className=' bg-orange-200 p-2 rounded-md mt-5'>
                <div className=' flex justify-between mt-2 mx-5 text-black rounded-md '>
                    <h1>Item:{cart.length}</h1>
                    <h1>Total Price:{totalprice.toFixed(2)}</h1>
                    {
                        cart.length
                            ?
                            <Link to='/dashboard/payment'><button className='btn btn-primary'>Pay</button></Link>
                            :
                            <button disabled className='btn btn-primary'>Pay</button>

                    }
                </div>
            </div>


            <div className="overflow-x-auto">
                <table className="table">
                    <thead>
                        <tr className='text-white'>
                            <th>#</th>
                            <th>Image</th>
                            <th>Item Name</th>
                            <th>Price</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody className='bg-red-300 text-black '>

                        {
                            cart.map((item, index) => <tr key={item._id}>
                                <th>{index}</th>

                                <td>
                                    <div className="flex items-center gap-3">
                                        <div className="avatar">
                                            <div className="mask mask-squircle h-12 w-12">
                                                <img
                                                    src={item.image}
                                                    alt="Avatar Tailwind CSS Component" />
                                            </div>
                                        </div>

                                    </div>
                                </td>
                                <td>
                                    <div>
                                        <div className="font-bold">{item.name}</div>
                                    </div>
                                </td>
                                <td>{item.price}</td>
                                <th>
                                    <button onClick={() => handleDeleteCart(item._id)} className="btn btn-ghost btn-lg">
                                        <FaTrashAlt className='text-red-500'></FaTrashAlt>
                                    </button>
                                </th>
                            </tr>)
                        }

                    </tbody>

                </table>
            </div>


        </div>
    );
};

export default Cart;