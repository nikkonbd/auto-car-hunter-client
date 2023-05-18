import React from 'react';

const HappyClient = () => {
    return (
        <div className='my-12'>
            <h2 className='text-4xl font-semibold text-center py-10'>Our Offers</h2>
            <div className="hero" style={{ backgroundImage: `url("https://storage.googleapis.com/theme-vessel-items/checking-sites/autocar-html/HTML/main/img/latest-offers/img-4.jpg")`, }}>
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="md:flex justify-evenly gap-6 py-32">
                    <div>Hello
                        <h2 className='text-2xl font-medium text-white'>967</h2>
                    </div>
                    <div>Hello</div>
                    <div>Hello</div>
                    <div>Hello</div>
                </div>
            </div>
        </div>
    );
};

export default HappyClient;