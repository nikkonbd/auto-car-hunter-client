import React from 'react';

const CardToys = ({ toy }) => {
    console.log(toy);
    const { toyName, category, price, availableQuantity } = toy;
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
                        {/* The button to open modal */}
                        <label htmlFor="my-modal" className="btn btn-warning text-white">View Details</label>

                        {/* Put this part before </body> tag */}
                        <input type="checkbox" id="my-modal" className="modal-toggle" />
                        <div className="modal">
                            <div className="modal-box">
                                <h3 className="font-bold text-lg">Congratulations random Internet user!</h3>
                                <p className="py-4">You've been selected for a chance to get one year of subscription to use Wikipedia for free!</p>
                                <div className="modal-action">
                                    <label htmlFor="my-modal" className="btn btn-warning text-white">Close!</label>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CardToys;