import { useForm } from "react-hook-form";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import { FaUtensils } from "react-icons/fa";



const AddItems = () => {
    const { register, handleSubmit } = useForm();
    const onSubmit = data => console.log(data);
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
                                <select {...register("category", { required: true })}
                                    className="select select-bordered w-full">
                                    <option disabled selected> Select a Category</option>
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
                            <textarea {...register("recipe", { required: true })} className="textarea textarea-bordered h-24" placeholder="Bio"></textarea>
                        </label>
                    </div>
                    <div>
                        <input {...register('image', { required: true })} type="file" className="file-input file-input-bordered w-full my-6" />
                    </div>


                    <button className="btn mt-2 text-white">
                        Add Item
                        <FaUtensils></FaUtensils>
                    </button>
                </form>
            </div>
        </div>
    );
};

export default AddItems;