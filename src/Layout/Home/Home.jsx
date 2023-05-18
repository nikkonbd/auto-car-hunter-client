import React from 'react';
import Banner from '../../Components/Banner/Banner';
import Footer from '../../Components/Footer/Footer';
import Tabs from '../../Components/Tabs/TabsCategory';
import TabsCategory from '../../Components/Tabs/TabsCategory';
import Gallery from '../../Components/Gallery/Gallery';
import HappyClient from '../../Components/HappyClients/HappyClient';

const Home = () => {
    return (
        <div className=''>
            <Banner />
            <TabsCategory />
            <Gallery />
            <HappyClient />
        </div>
    );
};

export default Home;