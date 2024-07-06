import ShopCard from "../../../Components/ShopCard/ShopCard";


const OrderTab = ({ item }) => {
    return (
        <div className=" grid grid-cols-3">
            {
                item.map(item => <ShopCard
                    key={item._id}
                    item={item}
                ></ShopCard>)
            }
        </div>
    );
};

export default OrderTab;