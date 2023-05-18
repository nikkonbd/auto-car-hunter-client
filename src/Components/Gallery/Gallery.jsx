import React from 'react';
import PhotoAlbum from "react-photo-album";
import './Gallery.css';

const Gallery = () => {

    const images = [
        {
            id: '_1',
            original: 'https://media.istockphoto.com/id/1283681886/photo/little-boy-riding-toy-car-in-the-garden.jpg?s=612x612&w=0&k=20&c=3B-qiRGCB1cUbUuAYZuSiVYf74hGrE3IOL2G3PWYCw4=',
        },
        {
            id: '_2',
            original: 'https://static-01.daraz.com.bd/p/1bd9005a371abfd8d9ab195b045511c9.jpg_720x720.jpg_.webp',
        },
        {
            id: '_3',
            original: 'https://www.jiomart.com/images/product/600x600/rvj5fy9odk/mini-monster-truck-toy-game-stunt-car-push-go-truck-sports-cars-non-battery-operated-car-baby-toy-for-fan-enjoy-sports-toys-push-go-kids-mini-monster-truck-product-images-orvj5fy9odk-p594713678-0-202210210154.jpg',
        },
        {
            id: '_4',
            original: 'https://i.pinimg.com/originals/45/62/a9/4562a9ba505a0db561efbca2ea1793b4.jpg',
        },
        {
            id: '_5',
            original: 'https://cdn.trendhunterstatic.com/thumbs/339/car-station.jpeg?auto=webp',
        },
        {
            id: '_6',
            original: 'https://m.media-amazon.com/images/I/71CMPx6t9sL._AC_SL1500_.jpg',
        },
    ];

    return (
        <div className='max-w-6xl mx-auto mb-12'>
            <h2 className='text-4xl font-medium text-center py-12'><span style={{ color: 'orangered' }}>Car Toys</span> Gallery</h2>
            <div className='gallery'>
                {
                    images.map(image => <div key={image.id}>

                        <img style={{ width: '100%', marginTop: '12px', border: '4px solid orange' }} src={image.original} alt="" />
                    </div>)
                }
            </div>
        </div>
    );
};

export default Gallery;