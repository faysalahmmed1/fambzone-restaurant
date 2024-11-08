import { useContext, useEffect, useState } from 'react';
import { loadCaptchaEnginge, LoadCanvasTemplate, LoadCanvasTemplateNoReload, validateCaptcha } from 'react-simple-captcha';
import { AuthContext } from '../../../Provider/AuthProvider';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import Swal from 'sweetalert2'
import SocalLogin from '../../../Components/SocalLogin/SocalLogin';



const Login = () => {
    const [disabled, setDisabled] = useState(true)
    const { loginUser } = useContext(AuthContext);
    const location = useLocation();
    const navigate = useNavigate();
    const from = location.state?.from?.pathname || "/";

    useEffect(() => {
        loadCaptchaEnginge(6);
    }, []);

    const handleLogin = (event) => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        loginUser(email, password)
            .then((result) => {
                const user = result.user;
                console.log(user);
            })

        Swal.fire({
            title: "you have Successfully login",
            showClass: {
                popup: `
                    animate__animated
                    animate__fadeInUp
                    animate__faster
                  `
            },
            hideClass: {
                popup: `
                    animate__animated
                    animate__fadeOutDown
                    animate__faster
                  `
            }
        });
        navigate(from, { replace: true });

    };
    const handleValidateCaptcha = (e) => {
        const user_captcha_value = e.target.value;
        console.log(user_captcha_value)
        if (validateCaptcha(user_captcha_value) == true) {
            setDisabled(false)
        }
        else {
            setDisabled(true)
        }
    }

    return (
        <>
            <Helmet>
                <title>FambZone || Login</title>
            </Helmet>

            <div>
                <div className="hero bg-base-200 min-h-screen">

                    <div className="hero-content flex-col lg:flex-row-reverse">
                        <div className="text-center md:w-1/2 lg:text-left">
                            <h1 className="text-5xl font-bold">Login</h1>
                            <p className="py-6">
                                If you want to view the admin page,
                                <span className=' text-red-500'> email: fambzone@gmail.com and password: FambZone@123
                                </span>
                            </p>
                        </div>

                        <div className="card bg-base-100 md:w-1/2 max-w-sm shadow-2xl">
                            <form onSubmit={handleLogin} className="card-body">

                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Email</span>
                                    </label>
                                    <input type="email" name='email' placeholder="email" className="input input-bordered" required />
                                </div>

                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Password</span>
                                    </label>
                                    <input type="password" name='password' placeholder="password" className="input input-bordered" required />
                                    <label className="label">
                                        <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                    </label>
                                </div>

                                <div className="form-control">
                                    <label className="label">
                                        <LoadCanvasTemplate />
                                    </label>
                                    <input onBlur={handleValidateCaptcha} type="text" name='captcha' placeholder="type the Captcha Above" className="input input-bordered" />

                                </div>

                                <div className="form-control mt-6">
                                    {/* //ToDo disabled */}
                                    <input disabled={false} className="btn btn-primary" type="submit" value="Login" />
                                </div>

                            </form>
                            <p className='text-center '><small>New Here</small> <Link to={'/signup'} className='text-lime-600'>Register</Link></p>

                            <SocalLogin></SocalLogin>


                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Login;