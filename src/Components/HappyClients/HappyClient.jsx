import React from 'react';

const HappyClient = () => {
    return (
        <div className='my-12'>
            <h2 className='text-4xl font-semibold text-center py-10'>Our Offers</h2>
            <div className="hero" style={{ backgroundImage: `url("https://storage.googleapis.com/theme-vessel-items/checking-sites/autocar-html/HTML/main/img/latest-offers/img-4.jpg")`, }}>
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="md:flex justify-evenly gap-6 py-32">
                    <div className='text-center'>
                        <h2 className='text-5xl font-medium text-white'>Toys Car Hunts</h2>
                        <p className='text-white'>You need to hunts all Toys cars!</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HappyClient;