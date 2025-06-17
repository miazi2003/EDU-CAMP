import React from 'react';
import Banner from './banner/Banner';
import InfoComp from './infoComp/InfoComp';
import Footer from './shared/Footer';
import Faq from '../faq/Faq';




const Home = () => {
    return (
        <div className='min-h-screen'>
            <Banner></Banner>
            <InfoComp></InfoComp>
            <Faq></Faq>
            <Footer></Footer>
        </div>
    );
};

export default Home;