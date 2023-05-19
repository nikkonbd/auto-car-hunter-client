import React, { useEffect } from 'react';
import { useLoaderData } from 'react-router-dom';

const SingleToys = () => {

    // const singleToy = useLoaderData();
    // console.log(singleToy);

    return (
        <div>
            <div className=''>
                <div className="hero" style={{ backgroundImage: `url("https://storage.googleapis.com/theme-vessel-items/checking-sites/autocar-html/HTML/main/img/latest-offers/img-4.jpg")`, }}>
                    <div className="hero-overlay bg-opacity-60"></div>
                    <div className=" py-20">
                        <h2 className='text-4xl font-medium text-white'>Single Toys Section</h2>
                    </div>
                </div>
            </div>
            <div className='max-w-6xl mx-auto'>
                <div className="hero my-12 min-h-screen bg-base-200">
                    <div className="hero-content flex-col lg:flex-row">
                        <img src="/images/stock/photo-1635805737707-575885ab0820.jpg" className="max-w-sm rounded-lg shadow-2xl" />
                        <div>
                            <h1 className="text-5xl font-bold">Box Office News!</h1>
                            <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                            <button className="btn btn-primary">Get Started</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SingleToys;