

import axios from "axios";

const axiosPublic = axios.create({
    baseURL: 'https://fambzone-server.vercel.app',
    timeout: 1000,
})


const useAxiosPublic = () => {
    return axiosPublic;
};

export default useAxiosPublic; 