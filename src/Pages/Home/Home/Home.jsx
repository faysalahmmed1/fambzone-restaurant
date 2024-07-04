import { Helmet } from "react-helmet-async";
import Banar from "../Banar/Banar";
import Catagory from "../Catagory/Catagory";
import PopularMenu from "../PopularMenu/PopularMenu";
import Testimonials from "../Testimonials/Testimonials";
import Featured from "./Featured/Featured";



const Home = () => {
    return (
        <div className="bg-sky-950">
            <Helmet>
                <title>Famzone || home</title>
            </Helmet>
            <Banar></Banar>
            <Catagory></Catagory>
            <PopularMenu></PopularMenu>
            <Featured></Featured>
            <Testimonials></Testimonials>
        </div>
    );
};

export default Home;