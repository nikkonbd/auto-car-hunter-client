import React from 'react';
import login from '../../assets/login.svg';
import { Link } from 'react-router-dom';

const Register = () => {
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
                                <h1 className="text-3xl font-bold">Sign-Up now!</h1>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Name</span>
                                    </label>
                                    <input type="text" name='name' placeholder="your name" className="input input-bordered" required />
                                </div>
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
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Photo Url</span>
                                    </label>
                                    <input type="url" name='photo' placeholder="password" className="input input-bordered" required />
                                </div>
                                <div className="form-control mt-6">
                                    <button className="btn btn-primary">SignUp Now</button>
                                </div>
                            </div>
                        </form>
                        <label className="label">
                            <p className='ml-8 pb-8'>Already Have a Account! <Link to={'/login'} className='font-medium'>Login</Link></p>
                        </label>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;