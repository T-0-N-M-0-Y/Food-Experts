import React from 'react';
import { Rating } from '@smastrom/react-rating'

import '@smastrom/react-rating/style.css'

const ShowFood = ({ food }) => {

    const { name, image, price, details, rating } = food;

    return (
        <div>
            <div className="card lg:card-side bg-lime-200 shadow-xl">
                <figure><img className='h-96 w-96' src={image} alt="Album" /></figure>
                <div className="card-body">
                    <h2 className="card-title"> {name} </h2>
                    <p>Price: ${price}</p>
                    <p>{details}</p>
                    <div className="flex-grow-1 flex items-center">
                        <Rating style={{ maxWidth: 150 }} value={rating} readOnly />
                        <span className='ml-3'>{rating?.number} {rating}</span>
                    </div>
                    <div className="card-actions justify-end">
                        <button className="btn bg-lime-200 hover:bg-orange-950 text-green-600 border-none">Order Now</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ShowFood;