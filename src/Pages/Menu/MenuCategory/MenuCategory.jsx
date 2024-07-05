import MenuItem from "../../Shared/MenuItem/MenuItem";


const MenuCategory = ({ item }) => {
    return (
        <div>
            <div className="grid md:grid-cols-2 gap-10">
                {
                    item.map(item => <MenuItem
                        key={item._id}
                        item={item}
                    ></MenuItem>)
                }

            </div>
        </div>
    );
};

export default MenuCategory;