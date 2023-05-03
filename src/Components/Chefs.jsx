import React, { useEffect, useState } from 'react';
import ShowChefs from './ShowChefs';

const Chefs = () => {

    const [chefs, setChefs] = useState([]);

    useEffect(() => {
        fetch("http://localhost:5000/chefs")
            .then(res => res.json())
            .then(data => setChefs(data))
            .catch(error => console.error(error))
    }, [])

    return (
        <div>
            <h1 className='text-3xl font-bold text-center my-20'>Our Awosome Chefs</h1>
            <div className='grid grid-cols-3 px-10 gap-5'>
                {
                    chefs.map(chef => <ShowChefs key={chef.id} chef={chef}></ShowChefs>)
                }
            </div>
        </div>
    );
};

export default Chefs;