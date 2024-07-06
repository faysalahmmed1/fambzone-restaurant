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
                <title>FambZone || Menu</title>
            </Helmet>

            <Cover
                img={imgCover}
                title={'Our Menu'}
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
                title={'offered'}
            ></MenuCategory>

            <div className="text-center mt-6">
                <SectionTitle
                    heading={'Oder your Favourite Food'}
                ></SectionTitle>
            </div>

            <div>
            </div>
            <MenuCategory
                item={dessert}
                title={'dessert'}
                img={DessertImg}
            ></MenuCategory>

            <div className="text-center">
                <SectionTitle
                    heading={'Order Your Favourite food'}
                ></SectionTitle>
            </div>
            <div>
            </div>
            <MenuCategory
                item={pizza}
                title={'pizza'}
                img={pizzaImg}
            ></MenuCategory>

            <div className="text-center uppercase mt-5">
                <SectionTitle
                    heading={'Order your Favourite food'}
                ></SectionTitle>
            </div>
           
            <MenuCategory
                item={salad}
                title={'salad'}
                img={saladImg}
            ></MenuCategory>

            <div className="text-center uppercase">
                <SectionTitle
                    heading={'Oder you Favourite Food'}
                ></SectionTitle>
            </div>
            
            <MenuCategory
                item={soups}
                title={'soups'}
                img={soupImg}
            ></MenuCategory>
        </div>
    );
};

export default Menu;