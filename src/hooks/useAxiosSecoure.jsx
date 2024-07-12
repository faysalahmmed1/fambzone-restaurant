import axios from "axios";

 const axiosSecure = axios.create({
    baseURL: 'http://localhost:5000'
})
const useAxiosSecoure = () => {
    return axiosSecure;

};

export default useAxiosSecoure;
