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
            <div className="card-body">
                <h2 className="card-title">{name}</h2>
                <p>Price: {price} $</p>
                <p>{recipe}</p>
                <div className="card-actions content-center ml-28">
                    <button className="btn btn-primary ">Add to Card</button>
                </div>
            </div>
        </div>
    );
};

export default ShopCard;