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
            <div className='grid md:grid-cols-3 lg:grid-cols-6 px-5'>
                {
                    catagories.map(catagory => <Catagory key={catagory.id} catagory={catagory}></Catagory>)
                }
            </div>
        </div>
    );
};

export default Catagories;