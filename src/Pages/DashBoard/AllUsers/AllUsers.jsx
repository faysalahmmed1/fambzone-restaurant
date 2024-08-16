import { useQuery } from "@tanstack/react-query";
import useAxiosSecoure from "../../../hooks/useAxiosSecoure";

import { MdDelete } from "react-icons/md";
import { FaTrashAlt, FaUser, FaUsers } from "react-icons/fa";
import Swal from "sweetalert2";


const AllUsers = () => {
    const axiosSecoure = useAxiosSecoure();
    const { data: users = [], refetch } = useQuery({
        queryKey: ['users'],
        queryFn: async () => {
            const res = await axiosSecoure.get('/users');
            return res.data;
        }
    });
    const handleMakeAdmin = (user) => {
        axiosSecoure.patch(`users/admin/${user._id}`)
            .then(res => {
                console.log(res.data);
                if (res.data.modifiedCount > 0) {
                    refetch()
                    Swal.fire({
                        title: "Are you sure?",
                        text: `Do you want to make ${user.name} an admin`,
                        icon: "warning",
                        showCancelButton: true,
                        confirmButtonColor: "#3085d6",
                        cancelButtonColor: "#d33",
                        confirmButtonText: "Admin"
                    }).then((result) => {
                        if (result.isConfirmed) {
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your file has been deleted.",
                                icon: "success"
                            });
                        }
                    });
                }

            })

    }
    const handleDeleteUser = (user) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                axiosSecoure.delete(`/users/${user._id}`)
                    .then(res => {
                        if (res.data.deletedCount) {
                            refetch();
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your file has been deleted.",
                                icon: "success"
                            });
                        }
                    })
            }

        });

    }
    return (
        <div>
            <div className="text-3xl justify-evenly flex my-4">
                <h1>All Users</h1>
                <h1>Total Users: {users.length}</h1>
            </div>
            <div className="overflow-x-auto">
                <table className="table table-zebra w-full">

                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Role</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            users.map((user, index) => <tr
                                key={user._id}
                            >
                                <th>{index + 1}</th>
                                <td>{user.name}</td>
                                <td>{user.email}</td>
                                <td>
                                    {user.role === 'admin' ? 'admin '
                                        :
                                        <button onClick={() => handleMakeAdmin(user)} className="btn btn-lg bg-orange-500">
                                            <FaUsers className='text-red-100'></FaUsers>
                                        </button>}
                                </td>
                                <td>
                                    <button onClick={() => handleDeleteUser(user)} className="btn btn-primary">
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

export default AllUsers;