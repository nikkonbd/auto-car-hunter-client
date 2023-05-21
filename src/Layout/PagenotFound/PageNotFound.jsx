import React from 'react';
import error from '../../../public/ww.jpg'
import { Link } from 'react-router-dom';

const PageNotFound = () => {
    return (
        <div className='max-w-6xl mx-auto flex justify-center mt-8'>
            <div>
                <img className='w-[600px]' src={error} alt="" />
                <p className='text-center'>404 Page Not Found!</p>
                <button className='btn btn-md btn-warning text-center'><Link to={'/'}>Back To Home</Link></button>
            </div>
        </div>
    );
};

export default PageNotFound;