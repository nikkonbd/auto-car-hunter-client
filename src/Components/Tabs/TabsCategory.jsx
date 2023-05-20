import React from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

const TabsCategory = () => {
    return (
        <div className='text-center my-16 max-w-6xl mx-auto'>
            <h2 className='text-4xl font-medium py-4'>Shops By Category</h2>
            <Tabs>
                <TabList>
                    <Tab>Sports Car</Tab>
                    <Tab>Truck</Tab>
                    <Tab>Regular Car</Tab>
                </TabList>

                <TabPanel>
                    <div className='flex gap-6 mt-4'>
                        <div className="card w-96 bg-base-100 shadow-xl">
                            <figure><img style={{ height: '220px' }} src="https://i.ytimg.com/vi/8a9jzpbFp-o/maxresdefault.jpg" alt="Shoes" /></figure>
                            <div className="card-body">
                                <h2 className="card-title">Police Car</h2>
                                <div className='text-start'>
                                    <p>This Toy Car is a great addition to any child's collection.</p>
                                    <p><strong>Price:</strong> $350</p>
                                    <p><strong>Quantity:</strong> 150</p>
                                </div>
                                <div className="card-actions justify-end">
                                    <button className="btn btn-primary">View Details</button>
                                </div>
                            </div>
                        </div>
                        <div className="card w-96 bg-base-100 shadow-xl">
                            <figure><img style={{ height: '220px' }} src="https://img.freepik.com/premium-photo/closeup-child-hand-playing-with-toy-car-hand-little-kid-pushing-plastic-toy-car-whi_370028-7034.jpg" alt="Shoes" /></figure>
                            <div className="card-body">
                                <h2 className="card-title">Sports Car</h2>
                                <div className='text-start'>
                                    <p>This Toy Car is a great addition to any child's collection.</p>
                                    <p><strong>Price:</strong> $400</p>
                                    <p><strong>Quantity:</strong> 150</p>
                                </div>
                                <div className="card-actions justify-end">
                                    <button className="btn btn-primary">View Details</button>
                                </div>
                            </div>
                        </div>
                        <div className="card w-96 bg-base-100 shadow-xl">
                            <figure><img style={{ height: '220px' }} src="https://i.ytimg.com/vi/8a9jzpbFp-o/maxresdefault.jpg" alt="Shoes" /></figure>
                            <div className="card-body">
                                <h2 className="card-title">Police Car</h2>
                                <div className='text-start'>
                                    <p>This Toy Car is a great addition to any child's collection.</p>
                                    <p><strong>Price:</strong> $450</p>
                                    <p><strong>Quantity:</strong> 50</p>
                                </div>
                                <div className="card-actions justify-end">
                                    <button className="btn btn-primary">View Details</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </TabPanel>
                <TabPanel>
                    <div className='flex gap-6 mt-4'>
                        <div className="card w-96 bg-base-100 shadow-xl">
                            <figure><img style={{ height: '220px' }} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSPs30KYv4gO_uKxU7LOHhnbP8eoNuWgh57vQ&usqp=CAU" alt="Shoes" /></figure>
                            <div className="card-body">
                                <h2 className="card-title">Police Car</h2>
                                <div className='text-start'>
                                    <p>This Toy Car is a great addition to any child's collection.</p>
                                    <p><strong>Price:</strong> $350</p>
                                    <p><strong>Quantity:</strong> 150</p>
                                </div>
                                <div className="card-actions justify-end">
                                    <button className="btn btn-primary">View Details</button>
                                </div>
                            </div>
                        </div>
                        <div className="card w-96 bg-base-100 shadow-xl">
                            <figure><img style={{ height: '220px' }} src="https://momlovesbest.com/wp-content/uploads/2023/01/Top-Bright-Wooden-Race-Track.jpg" alt="Shoes" /></figure>
                            <div className="card-body">
                                <h2 className="card-title">Sports Car</h2>
                                <div className='text-start'>
                                    <p>This Toy Car is a great addition to any child's collection.</p>
                                    <p><strong>Price:</strong> $400</p>
                                    <p><strong>Quantity:</strong> 150</p>
                                </div>
                                <div className="card-actions justify-end">
                                    <button className="btn btn-primary">View Details</button>
                                </div>
                            </div>
                        </div>
                        <div className="card w-96 bg-base-100 shadow-xl">
                            <figure><img style={{ height: '220px' }} src="https://media.istockphoto.com/id/1164225032/photo/little-boy-playing-with-toy-train.jpg?s=612x612&w=0&k=20&c=jXbEH0N8EsRYzjFoefPnbsjb1FvXj8yNsqO_sYxgqLQ=" alt="Shoes" /></figure>
                            <div className="card-body">
                                <h2 className="card-title">Police Car</h2>
                                <div className='text-start'>
                                    <p>This Toy Car is a great addition to any child's collection.</p>
                                    <p><strong>Price:</strong> $450</p>
                                    <p><strong>Quantity:</strong> 50</p>
                                </div>
                                <div className="card-actions justify-end">
                                    <button className="btn btn-primary">View Details</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </TabPanel>
                <TabPanel>
                    <div className='flex gap-6 mt-4'>
                        <div className="card w-96 bg-base-100 shadow-xl">
                            <figure><img style={{ height: '220px' }} src="https://momlovesbest.com/wp-content/uploads/2023/01/Construction-Race-Tracks-Set.webp" alt="Shoes" /></figure>
                            <div className="card-body">
                                <h2 className="card-title">Police Car</h2>
                                <div className='text-start'>
                                    <p>This Toy Car is a great addition to any child's collection.</p>
                                    <p><strong>Price:</strong> $350</p>
                                    <p><strong>Quantity:</strong> 150</p>
                                </div>
                                <div className="card-actions justify-end">
                                    <button className="btn btn-primary">View Details</button>
                                </div>
                            </div>
                        </div>
                        <div className="card w-96 bg-base-100 shadow-xl">
                            <figure><img style={{ height: '220px' }} src="https://i.ytimg.com/vi/OqfTtzwJ7NU/maxresdefault.jpg" alt="Shoes" /></figure>
                            <div className="card-body">
                                <h2 className="card-title">Sports Car</h2>
                                <div className='text-start'>
                                    <p>This Toy Car is a great addition to any child's collection.</p>
                                    <p><strong>Price:</strong> $400</p>
                                    <p><strong>Quantity:</strong> 150</p>
                                </div>
                                <div className="card-actions justify-end">
                                    <button className="btn btn-primary">View Details</button>
                                </div>
                            </div>
                        </div>
                        <div className="card w-96 bg-base-100 shadow-xl">
                            <figure><img style={{ height: '220px' }} src="https://rukminim1.flixcart.com/image/416/416/jkim1zk0/vehicle-pull-along/a/e/n/race-tracks-car-tracks-toys-with-192-pieces-flexible-tracks-set-original-imaf7umfgq4th8yh.jpeg?q=70" alt="Shoes" /></figure>
                            <div className="card-body">
                                <h2 className="card-title">Police Car</h2>
                                <div className='text-start'>
                                    <p>This Toy Car is a great addition to any child's collection.</p>
                                    <p><strong>Price:</strong> $450</p>
                                    <p><strong>Quantity:</strong> 50</p>
                                </div>
                                <div className="card-actions justify-end">
                                    <button className="btn btn-primary">View Details</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </TabPanel>
            </Tabs>
        </div>
    );
};

export default TabsCategory;