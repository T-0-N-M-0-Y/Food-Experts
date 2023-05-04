import React from 'react';
import { Link } from 'react-router-dom';
import LazyLoad from 'react-lazyload';
import { FaThumbsUp } from 'react-icons/fa';


const ShowChefs = ({ chef }) => {

    const { id, chefName, picture, yearsOfExperience, numberOfRecipes, likes } = chef;

    return (
        <div>
            <div className="card w-full bg-lime-200 shadow-xl">
                <LazyLoad>
                    <figure><img className='h-96' src={picture} alt="" /></figure>
                </LazyLoad>
                <div className="card-body">
                    <h2 className="card-title text-2xl font-bold">{chefName}</h2>
                    <p>Experience: {yearsOfExperience} Years</p>
                    <p>Recipies: {numberOfRecipes} Recipies</p>
                    <div className="card-actions flex justify-between items-center">
                        <p className='flex items-center'>Social: <FaThumbsUp className='mx-3 text-yellow-400'></FaThumbsUp> {likes}</p>
                        <Link to={`/chefs/${id}`}><button className="btn bg-lime-200 hover:bg-orange-950 text-green-600 border-none">View Recipies</button></Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ShowChefs;