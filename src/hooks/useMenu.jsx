// import { useEffect, useState } from "react"

import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "./useAxiosPublic";

const useMenu = () => {
    const AxiosPublic = useAxiosPublic();
    // const [menu, setmenu] = useState([]);
    // const [loading, setLoading] = useState(true);
    // useEffect(() => {
    //     fetch('http://localhost:5000/menu')
    //         .then(res => res.json())
    //         .then(data => {
    //             setmenu(data);
    //             setLoading(false);
    //         })

    // }, [])

    const { data: menu = [], isPending: loading, refetch } = useQuery({
        queryKey: ['menu'],
        queryFn: async () => {
            const res = await AxiosPublic.get('/menu');
            return res.data;
        }
    })
    return [menu, loading, refetch]
}
export default useMenu;