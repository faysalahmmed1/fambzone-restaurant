import ShopCard from "../../../Components/ShopCard/ShopCard";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';

const OrderTab = ({ item }) => {
    const pagination = {
        clickable: true,
        renderBullet: function (index, className) {
            return '<span class="' + className + '">' + (index + 1) + '</span>';
        },
    };
    return (
        <>
            <>
                <Swiper
                    pagination={pagination}
                    modules={[Pagination]}
                    className="mySwiper"
                >
                    <SwiperSlide>
                        <div className=" grid grid-cols-3">
                            {
                                item.map(item => <ShopCard
                                    key={item._id}
                                    item={item}
                                ></ShopCard>)
                            }
                        </div>
                    </SwiperSlide>

                </Swiper>
            </>



            <div className=" grid grid-cols-3">
                {
                    item.map(item => <ShopCard
                        key={item._id}
                        item={item}
                    ></ShopCard>)
                }
            </div>
        </>
    );
};

export default OrderTab;