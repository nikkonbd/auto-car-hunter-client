import React from 'react';
import { Link } from 'react-router-dom';

const CardToys = ({ toy }) => {
    // console.log(toy);
    const { toyName, category, price, availableQuantity, _id } = toy;
    // console.log(_id)
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
                        <button className="btn btn-warning text-white"><Link to={`/singleToys/${_id}`}>View Details </Link></button>
                        {/* The button to open modal */}
                        {/* <label htmlFor="my-modal-5" className="btn btn-warning">View Details</label> */}

                        {/* Put this part before </body> tag */}
                        {/* <input type="checkbox" id="my-modal-5" className="modal-toggle" />
                        <div className="modal">
                            <div className="modal-box w-11/12 max-w-5xl">
                                <h3 className="font-bold text-lg">Congratulations random Internet user!</h3>
                                <p className="py-4">You've been selected for a chance to get one year of subscription to use Wikipedia for free!</p>
                                <div className="modal-action">
                                    <label htmlFor="my-modal-5" className="btn btn-warning">Close!</label>
                                </div>
                            </div>
                        </div> */}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CardToys;