import { useQuery } from "@tanstack/react-query";
import UseAuth from "../../../hooks/UseAuth";
import useAxiosSecoure from "../../../hooks/useAxiosSecoure";
import { FaBook, FaDollarSign, FaJediOrder, FaReact, FaUsers } from "react-icons/fa";


const AdminHome = () => {
    const { user } = UseAuth();

    const axiosSecure = useAxiosSecoure();

    const { data: stats } = useQuery({
        queryKey: ['admin-stats'],
        queryFn: async () => {
            const res = await axiosSecure.get('/admin-stats');
            return res.data;
        }
    });

    return (
        <div>
            <h1 className=" 4xl mb-4">
                <>Hello, WelCome </>
                {
                    user?.displayName ? user.displayName : 'Back'
                }
            </h1>




            <div className="stats shadow bg-blue-900 text-center">
                <div className="stat">
                    <div className="stat-figure text-secondary">
                        <FaUsers className="text-4xl"></FaUsers>
                    </div>
                    <div className="stat-title">Users</div>
                    <div className="stat-value">{stats?.users}</div>
                    <div className="stat-desc">↗︎ 400 (22%)</div>
                </div>
                <div className="stat">
                    <div className="stat-figure text-secondary">
                        <FaJediOrder className="text-4xl"></FaJediOrder>

                    </div>
                    <div className="stat-title">Orders</div>
                    <div className="stat-value">{stats?.revenue}</div>
                    <div className="stat-desc">Jan 1st - Feb 1st</div>
                </div>
                <div className="stat">
                    <div className="stat-figure text-secondary">
                        <FaBook className="text-4xl"></FaBook>
                    </div>
                    <div className="stat-title">Menu Items</div>
                    <div className="stat-value">{stats?.menuItems}</div>
                    <div className="stat-desc">↘︎ 90 (14%)</div>
                </div>

                <div className="stat">
                    <div className="stat-figure text-secondary">
                        <FaDollarSign className="text-4xl"></FaDollarSign>
                    </div>
                    <div className="stat-title">Revenue</div>
                    <div className="stat-value">{stats?.revenue}</div>
                    <div className="stat-desc">Jan 1st - Feb 1st</div>
                </div>





            </div>
        </div>
    );
};

export default AdminHome;