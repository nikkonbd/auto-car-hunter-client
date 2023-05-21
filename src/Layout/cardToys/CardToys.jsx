import React from 'react';
import { Link } from 'react-router-dom';

const CardToys = ({ toy }) => {
    // console.log(toy);
    const { sellerName, toyName, category, price, availableQuantity, _id } = toy;
    // console.log(_id)
    return (
        <tr className=''>
            <td></td>
            <td><strong>{sellerName}</strong></td>
            <td>{toyName}</td>
            <td>{category}</td>
            <td>{availableQuantity}</td>
            <td>{price}</td>
            <th>
                <button className="btn btn-md font-normal btn-warning text-white"><Link to={`/singleToys/${_id}`}>View Details </Link></button>
            </th>
        </tr>
    );
};

export default CardToys;