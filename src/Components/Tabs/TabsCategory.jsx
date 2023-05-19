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
                                <h2 className="card-title">Shoes!</h2>
                                <p>If a dog chews shoes whose shoes does he choose?</p>
                                <div className="card-actions justify-end">
                                    <button className="btn btn-primary">Buy Now</button>
                                </div>
                            </div>
                        </div>
                        <div className="card w-96 bg-base-100 shadow-xl">
                            <figure><img style={{ height: '220px' }} src="https://img.freepik.com/premium-photo/closeup-child-hand-playing-with-toy-car-hand-little-kid-pushing-plastic-toy-car-whi_370028-7034.jpg" alt="Shoes" /></figure>
                            <div className="card-body">
                                <h2 className="card-title">Shoes!</h2>
                                <p>If a dog chews shoes whose shoes does he choose?</p>
                                <div className="card-actions justify-end">
                                    <button className="btn btn-primary">Buy Now</button>
                                </div>
                            </div>
                        </div>
                        <div className="card w-96 bg-base-100 shadow-xl">
                            <figure><img style={{ height: '220px' }} src="https://i.ytimg.com/vi/8a9jzpbFp-o/maxresdefault.jpg" alt="Shoes" /></figure>
                            <div className="card-body">
                                <h2 className="card-title">Shoes!</h2>
                                <p>If a dog chews shoes whose shoes does he choose?</p>
                                <div className="card-actions justify-end">
                                    <button className="btn btn-primary">Buy Now</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </TabPanel>
                <TabPanel>
                    <h2>Any content 2</h2>
                </TabPanel>
                <TabPanel>
                    <h2>Any content 3</h2>
                </TabPanel>
            </Tabs>
        </div>
    );
};

export default TabsCategory;