import React from 'react';

const ShopCard = ({ item }) => {
    const { name, recipe, image, price } = item;
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
                    <button className="btn btn-outline btn-warning mt-2 border-0 border-b-4">Add to Card</button>
                </div>
            </div>
        </div>
    );
};

export default ShopCard;