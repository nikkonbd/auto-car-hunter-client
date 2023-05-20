import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../Providers/AuthProviders';
import SingleToyRow from './SingleToyRow';

const MyToys = () => {

    const { user } = useContext(AuthContext);
    const [toys, setToys] = useState([]);

    const url = `http://localhost:5000/allPost?email=${user?.email}`
    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => {
                setToys(data)
                console.log(data);
            })
    }, [])

    // const handleDelete = (id) => {
    //     const proceed = confirm('Are you sure you want to delete?')
    //     if (proceed) {
    //         fetch(`http://localhost:5000/allPost/${id}`, {
    //             method: 'DELETE'
    //         })
    //             .then(res => res.json())
    //             .then(data => {
    //                 console.log(data);
    //                 if (data.deletedCount > 0) {
    //                     alert('Deleted SuccessFully!')
    //                     const remaining = toys.filter(toy => toy._id !== id);
    //                     setToys(remaining);
    //                 }
    //             })
    //     }
    // }

    return (
        <div>
            <div className="hero" style={{ backgroundImage: `url("https://storage.googleapis.com/theme-vessel-items/checking-sites/autocar-html/HTML/main/img/latest-offers/img-4.jpg")`, }}>
                <div className="hero-overlay bg-opacity-60"></div>
                <div className=" py-20">
                    <h2 className='text-4xl font-medium text-white'>My Toys Section</h2>
                </div>
            </div>
            <div className='max-w-6xl mx-auto'>
                <div className="overflow-x-auto w-full my-6">
                    <table className="table w-full">
                        {/* head */}
                        <thead>
                            <tr>
                                <th>
                                    Delete
                                </th>
                                <th>Image</th>
                                <th>Name</th>
                                <th>Seller Name</th>
                                <th>Category</th>
                                <th>Price</th>
                                <th>Rating</th>
                                <th>Quantity</th>
                                <th>User Email</th>
                                <th>Details</th>
                            </tr>
                        </thead>
                        <tbody>
                            {/* row 1 */}
                            {/* <tr>
                                <th>
                                    <label>
                                        <input type="checkbox" className="checkbox" />
                                    </label>
                                </th>
                                <td>
                                    <div className="flex items-center space-x-3">
                                        <div className="avatar">
                                            <div className="mask mask-squircle w-12 h-12">
                                                <img src="/tailwind-css-component-profile-2@56w.png" alt="Avatar Tailwind CSS Component" />
                                            </div>
                                        </div>
                                        <div>
                                            <div className="font-bold">Hart Hagerty</div>
                                            <div className="text-sm opacity-50">United States</div>
                                        </div>
                                    </div>
                                </td>
                                <td>
                                    Zemlak, Daniel and Leannon
                                    <br />
                                    <span className="badge badge-ghost badge-sm">Desktop Support Technician</span>
                                </td>
                                <td>Purple</td>
                                <th>
                                    <button className="btn btn-ghost btn-xs">details</button>
                                </th>
                            </tr> */}
                            {
                                toys.map(toy => <SingleToyRow key={toy._id} toy={toy}></SingleToyRow>)
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default MyToys;