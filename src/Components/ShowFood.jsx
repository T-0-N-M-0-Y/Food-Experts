import React from 'react';

const ShowFood = ({ food }) => {

    const { name, image, price, details, rating} = food;

    return (
        <div>
            <div className="card lg:card-side bg-base-100 shadow-xl">
                <figure><img className='h-96 w-full' src= {image} alt="Album" /></figure>
                <div className="card-body">
                    <h2 className="card-title"> {name} </h2>
                    <p>Price: ${price}</p>
                    <p>{details}</p>
                    <p>Ratings: {rating} Out of 5</p>
                    <div className="card-actions justify-end">
                        <button className="btn bg-lime-200 hover:bg-orange-950 text-green-600 border-none">Order Now</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ShowFood;