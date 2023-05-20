import React, { useEffect } from 'react';
import { Link, useLoaderData, useParams } from 'react-router-dom';

const SingleToys = () => {

    const singleToy = useLoaderData();
    console.log(singleToy);

    const { picture, toyName, detailDescription, category, price, availableQuantity, _id, sellerName, sellerEmail, rating } = singleToy;

    // const { id } = useParams();
    // useEffect(() => {
    //     fetch(`http://localhost:5000/toys/${id}`)
    //         .then(res => res.json())
    //         .then(data => console.log(data))
    // }, [id])

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
                    <div className="hero-content flex-col lg:flex-row p-20">
                        <img src={picture} className="w-[500px] rounded-lg shadow-2xl" />
                        <div className='ml-6'>
                            <h1 className="text-5xl font-bold">{toyName}</h1>
                            <p className="py-6">{detailDescription}</p>
                            <div className='space-y-2'>
                                <p>Seller Name: {sellerName}</p>
                                <p>Seller Email: {sellerEmail}</p>
                                <div className='flex gap-8'>
                                    <p><strong>Category:</strong> {category}</p>
                                    <p><strong>Rating:</strong> {rating}</p>
                                </div>
                                <div className='flex gap-8'>
                                    <p><strong>Price:</strong> {price}</p>
                                    <p><strong>Available Quantity:</strong> {availableQuantity}</p>
                                </div>
                            </div>
                            <button className='btn btn-md rounded mt-2 text-white btn-warning'><Link to={'/allToys'}>Back To All Toys</Link></button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SingleToys;