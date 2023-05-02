import React, { useEffect, useState } from 'react';
import ShowFood from './ShowFood';

const Foods = () => {

    const [foods, setFoods] = useState([]);
    const [showAll, setShowAll] = useState(false);

    useEffect(() => {
        fetch('http://localhost:5000/foods')
            .then(res => res.json())
            .then(data => setFoods(data))
            .catch(error => console.error(error))
    }, [])

    const handleShowAll = () => {
        setShowAll(true)
    }

    const  foodsToShow = showAll ? foods : foods.slice(0, 4);

    return (
        <div>
            <h1 className='text-3xl font-bold text-center my-10'>Our Featured Products</h1>

            <div className='grid grid-cols-2 gap-5 px-10'>
                {
                    foodsToShow && foodsToShow.map(food => <ShowFood key={food.id} food={food}></ShowFood>)
                }
            </div>

            <div className='text-center '>
            {foods.length > 4 && !showAll && (
                <button onClick={() => handleShowAll(true)} className="btn w-40 mt-10 bg-lime-200 hover:bg-orange-950 text-green-600 border-none">See More</button>
            )}
            </div>
        </div>
    );
};

export default Foods;