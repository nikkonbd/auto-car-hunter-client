import React from 'react';
import login from '../../assets/login.svg';
import { Link } from 'react-router-dom';

const Login = () => {
    return (
        <div className='bg-base-200'>
            <div className="hero min-h-screen max-w-6xl mx-auto">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="text-center lg:text-left">
                        <img className='pl-20' src={login} alt="" />
                    </div>
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <form>
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