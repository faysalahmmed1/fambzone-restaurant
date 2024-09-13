import { Helmet } from "react-helmet-async";
import Cover from "../../Shared/Cover/Cover";
import OrderCover from "../../../Images/assets/Order/order.jpg";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { useState } from "react";
import useMenu from "../../../hooks/useMenu";
import ShopCard from "../../../Components/ShopCard/ShopCard";
import OrderTab from "../OrderTab/OrderTab";
import { useParams } from "react-router-dom";


const Order = () => {
    const cetegoris = ['salad', 'pizza', 'soups', 'dessert', 'drinks']
    const { cetegory } = useParams();
    const initialIndex = cetegoris.indexOf(cetegory)
    const [tabIndex, setTabIndex] = useState(initialIndex);
    const [menu] = useMenu([]);



    const salad = menu.filter(item => item.category === 'salad');
    const pizza = menu.filter(item => item.category === 'pizza');
    const soups = menu.filter(item => item.category === 'soup');
    const dessert = menu.filter(item => item.category === 'dessert');
    const drinks = menu.filter(item => item.category === 'drinks')
    return (
        <div >
            <Helmet>
                <title>FambZone || Order</title>
            </Helmet>
            <Cover
                img={OrderCover}
                title={'Order Please'}
                descrption={'Would you like to try a Dish?'}
            ></Cover>
            <div className="text-center mt-4 mb-4">
                <Tabs selectedIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
                    <TabList>
                        <Tab>SALAD</Tab>
                        <Tab>PIZZA</Tab>
                        <Tab>SOUPS</Tab>
                        <Tab>DESSERTS</Tab>
                        <Tab>DRINKS</Tab>

                    </TabList>

                    <div className="p-5 sm:p-2 md:p-4 lg:p-5">
                        <TabPanel>
                            <OrderTab
                                item={salad}
                            ></OrderTab>
                        </TabPanel>
                    </div>
                    <TabPanel>
                        <OrderTab
                            item={dessert}
                        ></OrderTab>
                    </TabPanel>
                    <TabPanel>
                        <OrderTab
                            item={pizza}
                        ></OrderTab>
                    </TabPanel>

                    <TabPanel>
                        <OrderTab
                            item={soups}
                        ></OrderTab>
                    </TabPanel>
                    <TabPanel>

                        <OrderTab
                            item={drinks}
                        ></OrderTab>
                    </TabPanel>
                </Tabs>
            </div>

        </div >
    );
};

export default Order;