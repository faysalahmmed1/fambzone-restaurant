import { useQuery } from "@tanstack/react-query";
import useAxiosSecoure from "./useAxiosSecoure";
import UseAuth from "./UseAuth";


const useCart = () => {
    const axiosSecure = useAxiosSecoure();
    const { user } = UseAuth();
    const { refetch, data: cart = [] } = useQuery({
        queryKey: ['cart', user?.email],
        queryFn: async () => {
            const res = await axiosSecure.get(`/carts?email=${user.email}`);
            return res.data;

        }
    })
    return [ cart,refetch];
};

export default useCart;
