import SectionTitle from "../../../../Components/SectionTitle/SectionTitle";
import featured from '../../../../Images/assets/home/featured.jpg'
import './Featured.css';


const Featured = () => {

    return (
        <div className="featured bg-fixed mt-10 rounded p-10 ">
            <div className="text-center text-black">
                <SectionTitle
                    subHeding={'Check it out'}
                    heading={'From Our Menu'}
                ></SectionTitle>
            </div>
            <div className="md:flex justify-center items-center py-10 px-40">
                <div className="rounded">
                    <img src={featured} alt="" />
                </div>
                <div className="md: ml-10 text-white">
                    <p>March 20, 2024</p>
                    <h3>Where i can get some?</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus distinctio tempora officiis adipisci optio necessitatibus, error dicta ea aliquam culpa nihil voluptatem aperiam sapiente minus totam cum porro facilis! Atque vero hic optio. Corporis eaque ratione magnam quam tempore at. A illo soluta eligendi sint dignissimos, tempore ducimus deserunt ex!</p>
                    <button className="btn btn-outline btn-warning mt-2 border-0 border-b-4">Order Now</button>
                </div>
            </div>

        </div>
    );
};

export default Featured;