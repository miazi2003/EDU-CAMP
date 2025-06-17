import React from 'react';
import Banner from './banner/Banner';
import InfoComp from './infoComp/InfoComp';
import Footer from './shared/Footer';




const Home = () => {
    return (
        <div className='min-h-screen'>
            <Banner></Banner>
            <InfoComp></InfoComp>
            <Footer></Footer>
        </div>
    );
};

export default Home;