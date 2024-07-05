import { Helmet } from "react-helmet-async";
import Cover from "../../Shared/Cover/Cover";
import OrderCover from "../../../Images/assets/Order/order.jpg";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { useState } from "react";
import useMenu from "../../../hooks/useMenu";
import ShopCard from "../../../Components/ShopCard/ShopCard";


const Order = () => {
    const [tabIndex, setTabIndex] = useState(0);
    const [menu] = useMenu([]);

    const offered = menu.filter(item => item.category === 'offered')
    const dessert = menu.filter(item => item.category === 'dessert');
    const pizza = menu.filter(item => item.category === 'pizza');
    const salad = menu.filter(item => item.category === 'salad');
    const soups = menu.filter(item => item.category === 'soup');
    return (
        <div>
            <Helmet>
                <title>FambZone || Order</title>
            </Helmet>
            <Cover
                img={OrderCover}
                menutitle={'Order Please'}
                descrption={'Would you like to try a Dish?'}
            ></Cover>
            <div className="text-center mt-4 mb-4">
                <Tabs selectedIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
                    <TabList>
                        <Tab>SALAD</Tab>
                        <Tab>PIZZA</Tab>
                        <Tab>SOUPS</Tab>
                        <Tab>DESSERTS</Tab>
                        
                    </TabList>
                    
                        <TabPanel>
                           <div  className=" grid grid-cols-3">
                           {
                                salad.map(item => <ShopCard
                                    key={item._id}
                                    item={item}
                                ></ShopCard>)
                            }
                           </div>
                        </TabPanel>
                   
                    <TabPanel>
                    <div  className=" grid grid-cols-3">
                           {
                                pizza.map(item => <ShopCard
                                    key={item._id}
                                    item={item}
                                ></ShopCard>)
                            }
                           </div>
                    </TabPanel>
                    <TabPanel>
                    <div  className=" grid grid-cols-3">
                           {
                                salad.map(item => <ShopCard
                                    key={item._id}
                                    item={item}
                                ></ShopCard>)
                            }
                           </div>
                    </TabPanel>
                    <TabPanel>
                    <div  className=" grid grid-cols-3">
                           {
                                dessert.map(item => <ShopCard
                                    key={item._id}
                                    item={item}
                                ></ShopCard>)
                            }
                           </div>
                    </TabPanel>
                </Tabs>
            </div>

        </div >
    );
};

export default Order;