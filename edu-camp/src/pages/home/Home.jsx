import React from 'react';
import Banner from './banner/Banner';
import InfoComp from './infoComp/InfoComp';
import Footer from './shared/Footer';
import Faq from '../faq/Faq';
import DeadlineIssue from '../Features/DeadlineIssue';
import Difficulty from '../Features/Difficulty';




const Home = () => {
    return (
        <div className='min-h-screen'>
            <Banner></Banner>
            <InfoComp></InfoComp>
            <h1 className='md:text-4xl text-3xl text-center'>Our Features</h1>
            <DeadlineIssue></DeadlineIssue>

            <Difficulty></Difficulty>
            <Faq></Faq>
            <Footer></Footer>
        </div>
    );
};

export default Home;