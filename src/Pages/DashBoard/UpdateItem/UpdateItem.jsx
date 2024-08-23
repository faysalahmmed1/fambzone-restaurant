import { useForm } from "react-hook-form";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import { FaUtensils } from "react-icons/fa";
import useAxiosPublic from "../../../hooks/useAxiosPublic";
import useAxiosSecoure from "../../../hooks/useAxiosSecoure";
import Swal from "sweetalert2";
import { useLoaderData } from "react-router-dom";


const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_KEY;
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;

const UpdateItem = () => {
    const { _id, name, category, recipe, price, image } = useLoaderData();
    const { register, handleSubmit, reset } = useForm();
    const axiosPublic = useAxiosPublic();
    const axiosSecoure = useAxiosSecoure();
    const onSubmit = async (data) => {

        const imageFile = { image: data.image[0] }
        const res = await axiosPublic.post(image_hosting_api, imageFile, {
            headers: {
                'content-type': 'multipart/form-data'
            },
            timeout: 5000
        });
        if (res.data.success) {
            // now send the menu item data to the server with image url
            const menuItem = {
                name: data.name,
                category: data.category,
                price: parseFloat(data.price),
                recipe: data.recipe,
                image: res.data.data.display_url
            }
            const menuRes = await axiosSecoure.post(`/menu${_id}`, menuItem);
            console.log(menuRes.data);
            if (menuRes.data.modifiedCount > 0) {
                //show success popup
                reset();
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: "Successfully Update An a Item",
                    showConfirmButton: false,
                    timer: 1500
                });

            }
        }
        console.log('with image url', res.data);

    };
    return (
        <div className="text-center">
            <SectionTitle heading='Add An Items' subHeding='whats new'></SectionTitle>
            <div>
                <form onSubmit={handleSubmit(onSubmit)}>

                    <div className="form-control w-full my-6">
                        <label >
                            <div className="label">
                                <span className="label-text">Recipe Name*</span>
                            </div>
                            <input type="text"
                                defaultValue={name}
                                placeholder="Recipe name"
                                {...register("Name", { required: true })}
                                className="input input-bordered w-full" />

                        </label>
                    </div>
                    <div className="flex gap-6">
                        {/* catagory */}
                        <div className="form-control w-full my-6">
                            <label >
                                <div className="label">
                                    <span className="label-text">Category*</span>
                                </div>
                                <select defaultValue={category} {...register("category", { required: true })}
                                    className="select select-bordered w-full">
                                    <option disabled value='default'> Select a Category</option>
                                    <option value="salad">Salad</option>
                                    <option value="pizza">Pizza</option>
                                    <option value="soup">Soup</option>
                                    <option value="Dessert">Dessert</option>
                                    <option value="drink">Drink</option>

                                </select>

                            </label>
                        </div>

                        {/* price*/}
                        <div className="form-control w-full my-6">
                            <label >
                                <div className="label">
                                    <span className="label-text">Price*</span>
                                </div>
                                <input type="number"
                                    defaultValue={price}
                                    placeholder="price"
                                    {...register("price", { required: true })}
                                    className="input input-bordered w-full" />

                            </label>
                        </div>
                    </div>

                    <div>
                        <label className="form-control">
                            <div className="label">
                                <span className="label-text">Recipe Details</span>
                            </div>
                            <textarea defaultValue={recipe}{...register("recipe")} className="textarea textarea-bordered h-24" placeholder="Bio"></textarea>
                        </label>
                    </div>
                    <div>
                        <input {...register('image')} type="file" className="file-input file-input-bordered w-full my-6" />
                    </div>


                    <button className="btn mt-2 text-white">
                        Update Item
                        <FaUtensils></FaUtensils>
                    </button>
                </form>
            </div>
        </div>
    );
};

export default UpdateItem;