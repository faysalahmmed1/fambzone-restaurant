import { FaEdit, FaTrashAlt } from "react-icons/fa";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import useMenu from "../../../hooks/useMenu";
import Swal from "sweetalert2";
import useAxiosSecoure from "../../../hooks/useAxiosSecoure";
import { Link } from "react-router-dom";



const ManageItems = () => {
    const [menu, , refetch] = useMenu();
    const axiosSecoure = useAxiosSecoure();

    const handleDeleteItem = (item) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then(async (result) => {
            if (result.isConfirmed) {
                const res = await axiosSecoure.delete(`/menu/${item._id}`);
                console.log(res.data);
                if (res.data.deletedCount < 0) {
                    refetch();
                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: `${item.name} has been Deleted!`,
                        showConfirmButton: false,
                        timer: 1500
                    });
                }



            }
        });

    }
    return (
        <div>
            <div className="text-center">
                <SectionTitle heading='Manages All Items' subHeding='Harry Up'></SectionTitle>
            </div>

            <div className="overflow-x-auto">
                <table className="table">

                    <thead>
                        <tr>
                            <th>
                                #
                            </th>
                            <th>Item Image</th>
                            <th>Name</th>
                            <th>Price</th>
                            <th>Update</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            menu.map((item, index) => <tr key={item._id}>
                                <td>
                                    {index + 1}
                                </td>
                                <td>
                                    <div className="flex items-center gap-3">
                                        <div className="avatar">
                                            <div className="mask mask-squircle h-12 w-12">
                                                <img
                                                    src={item.image} alt="tailwind css components" />
                                            </div>
                                        </div>
                                    </div>
                                </td>
                                <td>{item.name}</td>
                                <td>{item.price}</td>

                                <td>
                                    <Link to={`/dashboard/updateitem/${item._id}`}>
                                        <button className="btn btn-ghost btn-sm bg-orange-400">
                                            <FaEdit className="text-white text-2xl"></FaEdit>
                                        </button>
                                    </Link>
                                </td>
                                <td>
                                    <button onClick={() => handleDeleteItem(item)}
                                        className="btn btn-ghost btn-lg">
                                        <FaTrashAlt className='text-white '></FaTrashAlt>
                                    </button>
                                </td>
                            </tr>)
                        }
                    </tbody>

                </table>
            </div>
        </div>

    );
};

export default ManageItems;