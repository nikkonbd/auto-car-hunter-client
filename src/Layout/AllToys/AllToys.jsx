import React, { useEffect, useState } from 'react';
import CardToys from '../cardToys/CardToys';

const AllToys = () => {

    const [toys, setToys] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/toys')
            .then(res => res.json())
            .then(data => {
                setToys(data);
            })
    }, [])
    return (
        <div>
            <div className=''>
                <div className="hero" style={{ backgroundImage: `url("https://storage.googleapis.com/theme-vessel-items/checking-sites/autocar-html/HTML/main/img/latest-offers/img-4.jpg")`, }}>
                    <div className="hero-overlay bg-opacity-60"></div>
                    <div className=" py-32">
                        <h2 className='text-4xl font-medium text-white'>All Toys Section</h2>
                    </div>
                </div>
            </div>
            <div className='max-w-6xl mx-auto my-10'>
                <div className='grid md:grid-cols-3 gap-12'>
                    {
                        toys.map(toy => <CardToys
                            key={toy._id}
                            toy={toy}
                        ></CardToys>)
                    }
                </div>
            </div>
        </div>

    );
};

export default AllToys;