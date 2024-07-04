import { Helmet } from "react-helmet-async";
import Conver from "../../Shared/Cover/Conver";
import imgCover from "../../../Images/assets/menu/banner3.jpg";
import PopularMenu from "../../Home/PopularMenu/PopularMenu";


const Menu = () => {
    return (
        <div>
            <Helmet>
                <title>FambZone || menu</title>
            </Helmet>
            <Conver
                img={imgCover}
                menutitle={'Our Menu'}
                descrption={'Would you like to try a dish'}
            ></Conver>
            <PopularMenu></PopularMenu>
            
        </div>
    );
};

export default Menu;