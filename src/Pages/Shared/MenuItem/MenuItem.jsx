

const MenuItem = ({ item }) => {
    const { name, recipe, image, price } = item;
    return (
        <div className="flex space-x-5 mx-4 my-4">
            <img style={{width:104, borderRadius:'0px 200px 200px 200px'}} src={image} alt="" />
            <div>
                <h3>{name}</h3>
                <h4>{recipe}</h4>
            </div>
            <p>{price}</p>
        </div>
    );
};

export default MenuItem;