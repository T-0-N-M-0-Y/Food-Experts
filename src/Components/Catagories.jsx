import React, { useEffect, useState } from 'react';
import Catagory from './Catagory';

const Catagories = () => {

    const [catagories, setCatagories] = useState([]);

    useEffect(() => {
        fetch("https://assignmnet-10-chef-recipe-hunter-server-t-0-n-m-0-y.vercel.app/catagory")
            .then(res => res.json())
            .then(data => setCatagories(data))
            .catch(error => console.error(error))
    }, [])

    return (
        <div>
            {/* <h1 className='text-3xl font-bold text-center my-20'>Explore</h1> */}
            <div className='grid grid-cols-6'>
                {
                    catagories.map(catagory => <Catagory key={catagory.id} catagory={catagory}></Catagory>)
                }
            </div>
        </div>
    );
};

export default Catagories;