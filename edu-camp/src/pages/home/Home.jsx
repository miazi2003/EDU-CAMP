import React from 'react';
import Banner from './banner/Banner';
import InfoComp from './infoComp/InfoComp';
import Footer from './shared/Footer';
import Faq from '../faq/Faq';
import DeadlineIssue from '../Features/DeadlineIssue';
import Difficulty from '../Features/Difficulty';
import BannerOne from '../../new BAnner/BannerOne';
import BannerTwo from '../../new BAnner/BannerTwo';
import CarouselAll from '../../carousel/CarouselAll';
import StarRating from '../star RAting/StarRating';





const Home = () => {
    return (
        <div className='min-h-screen max-w-7xl mx-auto flex flex-col gap-8'>
           <CarouselAll></CarouselAll>
            <InfoComp></InfoComp>
            <h1 className='md:text-4xl text-3xl text-center -mb-6'>Our Features</h1>
            <DeadlineIssue></DeadlineIssue>

            <Difficulty></Difficulty>
            <Faq></Faq>
            <StarRating></StarRating>
         
            <Footer></Footer>

        </div>
    );
};

export default Home;