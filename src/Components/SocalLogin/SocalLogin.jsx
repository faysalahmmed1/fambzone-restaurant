import React from 'react';
import { FaGoogle } from 'react-icons/fa';
import UseAuth from '../../hooks/UseAuth';
import useAxiosPublic from '../../hooks/useAxiosPublic';
import { useNavigate } from 'react-router-dom';

const SocalLogin = () => {
    const { GoogleSignIn } = UseAuth();
    const axiosPublic = useAxiosPublic();
    const navigate = useNavigate();

    const handleGoogleSingIn = () => {
        GoogleSignIn()
            .then(result => {
                console.log(result.user);
                const userInfo = {
                    email: result.user?.email,
                    name: result.user?.displayName
                }
                axiosPublic.post('users', userInfo)
                    .then(res => {
                        console.log(res.data);
                        navigate('/');
                    })
            })
    }

    return (
        <div>
            <div className="divider"></div>
            <div className='p-8 ml-24'>


                <button onClick={handleGoogleSingIn} className="btn btn-secondary">
                    <FaGoogle></FaGoogle>
                    Secondary
                </button>
            </div>
        </div>
    );
};

export default SocalLogin;