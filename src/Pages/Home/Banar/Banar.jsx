import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import img1 from '../../../Images/assets/home/banar1.jpg';
import img2 from '../../../Images/assets/home/banar2.jpg';
import img3 from '../../../Images/assets/home/banar3.png';
import img4 from '../../../Images/assets/home/banar4.jpg';
import img5 from '../../../Images/assets/home/banar5.png';
import img6 from '../../../Images/assets/home/banar6.png';

const Banar = () => {
    return (
        <div>
            <Carousel>
                <div>
                    <img src={img1} />

                </div>
                <div>
                    <img src={img2} />

                </div>
                <div>
                    <img src={img3} />

                </div>
                <div>
                    <img src={img4} />

                </div>
                <div>
                    <img src={img5} />

                </div>
                <div>
                    <img src={img6} />

                </div>
            </Carousel>
        </div>
    );
};

export default Banar;