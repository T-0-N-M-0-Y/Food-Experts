import React from 'react';
import Head from './Head';
import Foods from './Foods';
import Catagories from './Catagories';

const Home = () => {
    return (
        <div>
            <Head></Head>
            <Catagories></Catagories>
            <Foods></Foods>
        </div>
    );
};

export default Home;