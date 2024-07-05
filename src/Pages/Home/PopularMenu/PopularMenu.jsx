import { useEffect } from "react";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import MenuItem from "../../Shared/MenuItem/MenuItem";
import useMenu from "../../../hooks/useMenu";


const PopularMenu = () => {
    const [menu, setMenu] = useMenu();
    const popular = menu.filter(item => item.category === 'popular')
    return (
        <div>
            <section className="mx-auto text-center uppercase mb-12">
                <SectionTitle
                    subHeding={'__Check it out__'}
                    heading={'Popular Items'}
                ></SectionTitle>
            </section>
            <div className="grid md:grid-cols-2 gap-10">
                {
                    popular.map(item => <MenuItem
                        key={item._id}
                        item={item}
                    ></MenuItem>)
                }

            </div>
        </div>
    );
};

export default PopularMenu;