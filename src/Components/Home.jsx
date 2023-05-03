import React from 'react';
import Head from './Head';
import Foods from './Foods';
import Catagories from './Catagories';
import Chefs from './Chefs';

const Home = () => {
    return (
        <div className=''>
            <Head></Head>
            <Catagories></Catagories>
            <Chefs></Chefs>
            <Foods></Foods>
        </div>
    );
};

export default Home;