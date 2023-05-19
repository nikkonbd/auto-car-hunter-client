import React, { useContext } from 'react';
import { useForm } from "react-hook-form";
import { AuthContext } from '../../Providers/AuthProviders';

const AddCarToys = () => {

    const { user } = useContext(AuthContext);

    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = data => console.log(data);

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
            <div className='my-20 max-w-6xl mx-auto'>
                <form onSubmit={handleSubmit(onSubmit)} className='space-y-3'>
                    {/* register your input into the hook by invoking the "register" function */}
                    <div>
                        <p className='font-medium'>Photo Url</p>
                        <input className='border-2 w-2/4 p-2 border-indigo-950 mr-6' defaultValue="test" placeholder='photo url' {...register("url")} />
                    </div>

                    {/* include validation with required or other standard HTML validation rules */}
                    <div>
                        <p className='font-medium'>Name</p>
                        <input className='border-2 w-6/12 p-2 border-indigo-950' placeholder='your name' {...register("name", { required: true })} />
                    </div>
                    {/* errors will return when field validation fails  */}
                    {errors.exampleRequired && <span>This field is required</span>}
                    <div>
                        <p className='font-medium'>User Name:</p>
                        <input
                            className="border-2 w-4/12 p-2 border-indigo-950"
                            {...register("posted")}
                            placeholder="user name"
                            type="name"
                        />
                    </div>
                    <div>
                        <p className='font-medium'>User Email:</p>
                        <input
                            className="border-2 w-4/12 p-2 border-indigo-950"
                            {...register("postedBy")}
                            placeholder="your email"
                            type="email"
                        />
                    </div>
                    <div className=''>
                        <p className='font-medium'>Chose Category:</p>
                        <select {...register("select")} className='py-2 px-4 border-2 w-4/12 p-2 border-indigo-950'>
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
                                className="border-2 w-25 p-2 border-indigo-950"
                                {...register("price")}
                                placeholder="price"
                                type="number"
                            />
                        </div>
                        <div>
                            <p className='font-medium'>Rating:</p>
                            <input
                                className="border-2 w-25 p-2 border-indigo-950"
                                {...register("rating")}
                                placeholder="rating"
                                type="number"
                            />
                        </div>
                        <div>
                            <p className='font-medium'>Quantity:</p>
                            <input
                                className="border-2 w-25 p-2 border-indigo-950"
                                {...register("quantity")}
                                placeholder="quantity"
                                type="number"
                            />
                        </div>
                    </div>
                    <div>
                        <input className='bg-orange-500 py-2 px-4 text-white cursor-pointer' type="submit" value="Add A Toys" />
                    </div>
                </form>
            </div>
        </div>
    );
};

export default AddCarToys;