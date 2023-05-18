import React from 'react';
import image1 from '../../assets/img-4.jpg';
import image2 from '../../assets/img-5.jpg';
import image3 from '../../assets/img-6.jpg';

const Banner = () => {
    return (
        <div className="carousel w-full">
            <div id="slide1" className="carousel-item relative w-full">
                <img src={image1} className="w-full h-[600px]" />
                <div className="absolute flex gap-4 top-0 items-center bottom-0">
                    <div className='space-y-5 pl-20'>
                        <h2 className='text-6xl font-semibold text-white'>WELCOME TO AUTO CAR!</h2>
                        <p className='text-white'>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod.</p>
                        <button className="btn btn-warning text-white mr-5">Get Started Now</button>
                    </div>
                </div>
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide3" className="btn bg-orange-500">❮</a>
                    <a href="#slide2" className="btn bg-orange-500">❯</a>
                </div>
            </div>
            <div id="slide2" className="carousel-item relative w-full">
                <img src={image2} className="w-full h-[600px]" />
                <div className="absolute flex gap-4 top-0 items-center bottom-0">
                    <div className='space-y-5 pl-20'>
                        <h2 className='text-6xl font-semibold text-white'>BEST PLACE FOR SELL CAR!</h2>
                        <p className='text-white'>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod.</p>
                        <button className="btn btn-warning text-white mr-5">Get Started Now</button>
                    </div>
                </div>
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide1" className="btn bg-orange-500">❮</a>
                    <a href="#slide3" className="btn bg-orange-500">❯</a>
                </div>
            </div>
            <div id="slide3" className="carousel-item relative w-full">
                <img src={image3} className="w-full h-[600px]" />
                <div className="absolute flex gap-4 top-0 items-center bottom-0">
                    <div className='space-y-5 pl-20'>
                        <h2 className='text-6xl font-semibold text-white'>FIND YOUR DREAM CAR!</h2>
                        <p className='text-white'>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod.</p>
                        <button className="btn btn-warning text-white mr-5">Get Started Now</button>
                    </div>
                </div>
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide3" className="btn bg-orange-500">❮</a>
                    <a href="#slide1" className="btn bg-orange-500">❯</a>
                </div>
            </div>
            {/* <div id="slide4" className="carousel-item relative w-full">
                <img src={image1} className="w-full h-[600px]" />
                <div className="absolute flex gap-4 top-0 items-center bottom-0">
                    <div className='space-y-5 pl-20'>
                        <h2 className='text-6xl font-semibold text-white'>WELCOME TO AUTO CAR</h2>
                        <p className='text-white'>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod.</p>
                        <button className="btn btn-warning text-white mr-5">Get Started Now</button>
                    </div>
                </div>
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide4" className="btn bg-orange-500">❮</a>
                    <a href="#slide2" className="btn bg-orange-500">❯</a>
                </div>
            </div> */}
        </div>
    );
};

export default Banner;