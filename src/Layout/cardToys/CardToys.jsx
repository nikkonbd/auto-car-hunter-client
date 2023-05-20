import React from 'react';
import { Link } from 'react-router-dom';

const CardToys = ({ toy }) => {
    // console.log(toy);
    const { sellerName, toyName, category, price, availableQuantity, _id } = toy;
    // console.log(_id)
    return (
        <tr className=''>
            <td>{sellerName}</td>
            <td>{toyName}</td>
            <td>{availableQuantity}</td>
            <td>{category}</td>
            <td>{price}</td>
            <th>
                <button className="btn btn-warning text-white"><Link to={`/singleToys/${_id}`}>View Details </Link></button>
            </th>
        </tr>
    );
};

export default CardToys;