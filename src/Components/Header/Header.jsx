import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Providers/AuthProviders';

const Header = () => {

    const { user, logOut } = useContext(AuthContext);

    const handleLogout = () => {
        logOut()
            .then(() => { })
            .catch(error => console.log(error))
    }

    const navBar = <>
        <li><a><Link to={'/'}>Home</Link></a></li>
        <li><Link to={'/allToys'}>All Toys</Link></li>
        <li><a><Link to={'/blogs'}>Blogs</Link></a></li>
        <li><a><Link to={'/addToys'}>Add a Toys</Link></a></li>
        {user ? <li><Link onClick={handleLogout} className='font-medium'>Logout</Link></li> : <li className='font-medium'><Link to={'/login'}>Login</Link></li>}
    </>
    return (
        <div className="navbar justify-around bg-base-100">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        {navBar}
                    </ul>
                </div>
                <a className="btn btn-ghost normal-case text-3xl font-semibold"><Link to={'/'}>AutoCar</Link></a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {navBar}
                </ul>
            </div>
        </div>
    );
};

export default Header;