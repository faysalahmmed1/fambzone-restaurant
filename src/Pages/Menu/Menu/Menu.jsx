import { Helmet } from "react-helmet-async";
import Cover from "../../Shared/Cover/Cover";
import imgCover from "../../../Images/assets/menu/banner3.jpg";
import DessertImg from "../../../Images/assets/menu/dessert.jpeg";
import pizzaImg from "../../../Images/assets/menu/pizza.jpg";
import saladImg from "../../../Images/assets/menu/salad.jpg";
import soupImg from"../../../Images/assets/menu/soup.jpg"
import useMenu from "../../../hooks/useMenu";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import MenuCategory from "../MenuCategory/MenuCategory";



const Menu = () => {
    const [menu] = useMenu([]);
    const offered = menu.filter(item => item.category === 'offered')
    const dessert = menu.filter(item => item.category === 'dessert');
    const pizza = menu.filter(item => item.category === 'pizza');
    const salad = menu.filter(item => item.category === 'salad');
    const soups = menu.filter(item => item.category === 'soup');


    return (
        <div>
            <Helmet>
                <title>FambZone || menu</title>
            </Helmet>

            <Cover
                img={imgCover}
                menutitle={'Our Menu'}
                descrption={'Would you like to try a dish'}
            ></Cover>

            <div className="text-center uppercase">
                <SectionTitle
                    subHeding={"Today's Offer"}
                    heading={"Don't Miss"}
                ></SectionTitle>
            </div>

            <MenuCategory
                item={offered}
            ></MenuCategory>

            <div className="text-center mt-6">
                <SectionTitle
                    heading={'Oder your Favourite Food'}
                ></SectionTitle>
            </div>

            <div>
                <Cover
                    img={DessertImg}
                    menutitle={'dessert'}
                    descrption={'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur nam aut cum earum dolore nihil culpa veniam unde laborum '}
                >
                </Cover>
            </div>
            <MenuCategory
                item={dessert}
            ></MenuCategory>

            <div className="text-center">
                <SectionTitle
                    heading={'Order Your Favourite food'}
                ></SectionTitle>
            </div>
            <div>
                <Cover
                    img={pizzaImg}
                    menutitle={'Pizza'}
                    descrption={'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur nam aut cum earum dolore nihil culpa veniam unde laborum'}
                ></Cover>
            </div>
            <MenuCategory
                item={pizza}
            ></MenuCategory>

            <div className="text-center uppercase mt-5">
                <SectionTitle
                    heading={'Order your Favourite food'}
                ></SectionTitle>
            </div>
            <div>
                <Cover
                    img={saladImg}
                    menutitle={'Salads'}
                    descrption={'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur nam aut cum earum dolore nihil culpa veniam unde laborum'}
                ></Cover>
            </div>
            <MenuCategory
                item={salad}
            ></MenuCategory>

            <div className="text-center uppercase">
                <SectionTitle
                    heading={'Oder you Favourite Food'}
                ></SectionTitle>
            </div>
            <div>
                <Cover
                    img={soupImg}
                    menutitle={'Shops'}
                    descrption={'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur nam aut cum earum dolore nihil culpa veniam unde laborum'}
                ></Cover>
            </div>
            <MenuCategory
                item={soups}
            ></MenuCategory>
        </div>
    );
};

export default Menu;