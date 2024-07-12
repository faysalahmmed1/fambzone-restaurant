import React, { useContext } from 'react';
import { AuthContext } from '../../Provider/AuthProvider';
import UseAuth from '../../hooks/UseAuth';
import Swal from 'sweetalert2';
import { useLocation, useNavigate } from "react-router-dom";
import axios from 'axios';

const ShopCard = ({ item }) => {

    const { name, recipe, image, price, _id } = item;
    const { user } = UseAuth();
    const navigate = useNavigate();
    const location = useLocation();



    const handleAddToCard = (food) => {
        if (user && user.email) {
            console.log(user.email, food);
            const CartItem = {
                menuId: _id,
                email: user.email, name, price, image
            }

            axios.post('http://localhost:5000/carts', CartItem)
                .then(res => {
                    console.log(res.data)
                    if (res.data.insertedId) {
                        Swal.fire({
                            position: "top-end",
                            icon: "success",
                            title: `${name} added to your cart`,
                            showConfirmButton: false,
                            timer: 1500
                        });
                    }

                })

        } else {
            Swal.fire({
                title: "You are not Login?",
                text: "please login to add to the cart",
                icon: "warning",
                showCancelButton: true,
                confirmButtonColor: "#3085d6",
                cancelButtonColor: "#d33",
                confirmButtonText: "Login!"
            }).then((result) => {
                if (result.isConfirmed) {
                    navigate("/login", { state: { from: location } });
                }
            });
        }
    }

    return (
        <div className="card bg-base-100 w-96 shadow-xl">
            <figure>
                <img
                    src={image}
                    alt="Shoes" />
            </figure>
            <div className="card-body flex flex-col items-center">
                <h2 className="card-title">{name}</h2>
                <p>Price: {price} $</p>
                <p>{recipe}</p>
                <div className="card-actions ">
                    <button onClick={() => handleAddToCard(item)} className="btn btn-outline btn-warning mt-2 border-0 border-b-4">Add to Card</button>
                </div>
            </div>
        </div>
    );
};

export default ShopCard;