import axios from "axios";
import { useNavigate } from "react-router-dom";
import UseAuth from "./UseAuth";

const axiosSecure = axios.create({
    baseURL: 'http://localhost:5000'
})
const useAxiosSecoure = () => {
    const navigate = useNavigate();
    const { logOut } = UseAuth();
    // request interceptors to add authorization header for every  secure call to the api
    axiosSecure.interceptors.request.use(function (config) {
        const token = localStorage.getItem('access-token')
        // console.log('request stop by interceptors', token)
        config.headers.authorization = `Bearer ${token}`;
        return config;
    }, function (error) {
        // Do something with request error
        return Promise.reject(error);
    });


    //Interceptors 401 and 403 status
    axiosSecure.interceptors.response.use(function (response) {
        return response;

    }, async (error) => {
        const status = error.response.status;
        // console.log('status code error interceptors', status);
        //for 401 or 403 logout the user and move  the user to the login
        if (status === 401 || status === 403) {
            await logOut();
            navigate('/login') 
        }
        return Promise.reject(error);
    })
    return axiosSecure;

};

export default useAxiosSecoure;
