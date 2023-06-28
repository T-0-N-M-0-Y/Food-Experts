import React from 'react';
import Head from './Head';
import Foods from './Foods';
import Catagories from './Catagories';
import Chefs from './Chefs';
import Header from './Header';

const Home = () => {
    return (
        <div className=''>
            <Head></Head>
            <Chefs></Chefs>
            <Catagories></Catagories>
            <Foods></Foods>
        </div>
    );
};

export default Home;