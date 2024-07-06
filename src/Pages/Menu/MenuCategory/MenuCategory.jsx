import { Link } from "react-router-dom";
import MenuItem from "../../Shared/MenuItem/MenuItem";
import Cover from "../../Shared/Cover/Cover";


const MenuCategory = ({ item, title, img }) => {
    return (
        <div>
            {title && <Cover img={img} title={title}></Cover>}
            <div className="grid md:grid-cols-2 gap-10">
                {
                    item.map(item => <MenuItem
                        key={item._id}
                        item={item}
                    ></MenuItem>)
                }

            </div>
            <Link to={`/order/${title}`}>
                <button className="btn btn-outline btn-warning mt-2 border-0 border-b-4">Order Now</button>
            </Link>
        </div>
    );
};

export default MenuCategory;