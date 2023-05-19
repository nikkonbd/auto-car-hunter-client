import React, { useContext } from 'react';
import login from '../../assets/login.svg';
import { Link, Navigate } from 'react-router-dom';
import { AuthContext } from '../../Providers/AuthProviders';

const Login = () => {

    const { signIn } = useContext(AuthContext);


    const handleLogin = (event) => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password)
        signIn(email, password)
            .then((result) => {
                const user = result.user;
                console.log(user);
            })
            .catch(error => {
                console.log(error);
            })
    }

    <Navigate to={'/'}></Navigate>

    return (
        <div className='bg-base-200'>
            <div className="hero min-h-screen max-w-6xl mx-auto">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="text-center lg:text-left">
                        <img className='pl-20' src={login} alt="" />
                    </div>
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <form onSubmit={handleLogin}>
                            <div className="card-body">
                                <h1 className="text-3xl font-bold">Login now!</h1>
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
                                <div className="form-control mt-6">
                                    <button className="btn btn-primary">Login</button>
                                </div>
                            </div>
                        </form>
                        <label className="label">
                            <p className='ml-8 pb-8'>Don't Have an Account Please? <Link to={'/register'} className='font-medium'>Sign Up</Link></p>
                        </label>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;