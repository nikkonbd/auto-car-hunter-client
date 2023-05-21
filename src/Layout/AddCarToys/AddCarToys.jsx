import React, { useContext, useEffect } from 'react';
import { useForm } from "react-hook-form";
import { AuthContext } from '../../Providers/AuthProviders';
import Swal from 'sweetalert2';

const AddCarToys = () => {

    const { user } = useContext(AuthContext);

    const {
        register,
        handleSubmit,
        watch,
        formState: { errors } } = useForm();
    const onSubmit = data => {
        console.log(data)
        fetch('https://toys-car-pro-server.vercel.app/addToCar', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.insertedId) {
                    Swal.fire(
                        'SuccessFully?',
                        'Car Toys Add?',
                        'success'
                    )
                }
            })
    };

    return (
        <div>
            <div className=''>
                <div className="hero" style={{ backgroundImage: `url("https://storage.googleapis.com/theme-vessel-items/checking-sites/autocar-html/HTML/main/img/latest-offers/img-4.jpg")`, }}>
                    <div className="hero-overlay bg-opacity-60"></div>
                    <div className=" py-32">
                        <h2 className='text-4xl font-medium text-white'>Add A Toys Section</h2>
                    </div>
                </div>
            </div>
            <div className='my-20 max-w-6xl mx-auto flex justify-center'>
                <form onSubmit={handleSubmit(onSubmit)} className='space-y-3 bg-base-200 p-12 rounded-xl'>
                    {/* register your input into the hook by invoking the "register" function */}
                    <div>
                        <p className='font-medium'>Photo Url</p>
                        <input className='border-[1px] w-[100%] p-2 rounded px-6 border-indigo-950 mr-6' required placeholder='photo url' {...register("url")} />
                    </div>

                    {/* include validation with required or other standard HTML validation rules */}
                    <div>
                        <p className='font-medium'>Name</p>
                        <input className='border-[1px] w-[100%] rounded p-2 px-6 border-indigo-950' placeholder='your name' {...register("name", { required: true })} />
                    </div>
                    {/* errors will return when field validation fails  */}
                    {errors.exampleRequired && <span>This field is required</span>}
                    <div className=''>
                        <div>
                            <p className='font-medium'>User Name:</p>
                            <input
                                className="border-[1px] w-[50%] p-2 rounded px-6 border-indigo-950"
                                {...register("posted")}
                                defaultValue={user?.displayName} placeholder="user name"
                                type="text"
                                required
                            />
                        </div>
                        <div>
                            <p className='font-medium'>User Email:</p>
                            <input
                                className="border-[1px] w-[50%] rounded p-2 px-6 border-indigo-950"
                                {...register("email")}
                                defaultValue={user?.email} placeholder="your email"
                                type="email"
                            />
                        </div>
                    </div>
                    <div className=''>
                        <p className='font-medium'>Chose Category:</p>
                        <select {...register("select")} className='py-2 px-6 rounded border-2 w-4/12 p-2 border-[1px'>
                            <option value="select">Select</option>
                            <option value="sportsCar">Sports Car</option>
                            <option value="truck">Truck</option>
                            <option value="regularCar">Regular Car</option>
                        </select>
                    </div>
                    <div className='flex items-center gap-6'>
                        <div>
                            <p className='font-medium'>Price:</p>
                            <input
                                className="border-[1px] w-25 p-2 px-4 rounded border-indigo-950"
                                {...register("price")}
                                placeholder="price"
                                type="number"
                            />
                        </div>
                        <div>
                            <p className='font-medium'>Rating:</p>
                            <input
                                className="border-[1px] w-25 p-2 px-4 rounded border-indigo-950"
                                {...register("rating")}
                                placeholder="rating"
                                type="text"
                            />
                        </div>
                        <div>
                            <p className='font-medium'>Quantity:</p>
                            <input
                                className="border-[1px] w-25 p-2 px-4 rounded border-indigo-950"
                                {...register("quantity")}
                                placeholder="quantity"
                                type="number"
                                required
                            />
                        </div>
                    </div>
                    <div>
                        <p className='font-medium'>Description:</p>
                        <input className='border-[1px] w-[100%] p-2 py-6 rounded px-6 border-indigo-950 mr-6' placeholder='Description' {...register("description")} />
                    </div>
                    <div>
                        <input className='bg-orange-500 py-2 px-4 rounded w-[100%] text-white cursor-pointer' type="submit" value="Add A Toys" />
                    </div>
                </form>
            </div>
        </div>
    );
};

export default AddCarToys;