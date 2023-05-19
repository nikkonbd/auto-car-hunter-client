import React from 'react';

const CardToys = ({ toy }) => {
    console.log(toy);
    const { toyName, Subcategory, category, price, availableQuantity } = toy;
    return (
        <div>
            <div className="card w-96 bg-base-100 shadow-xl">
                <figure><img className='' style={{ height: '260px' }} src={toy.picture} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{toyName}</h2>
                    <p>Category: {category}</p>
                    <div>
                        <p>Price: {price}</p>
                        <p>Available Quantity: {availableQuantity}</p>
                    </div>
                    <div className="card-actions justify-end">
                        <button className="btn btn-primary">View Details</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CardToys;