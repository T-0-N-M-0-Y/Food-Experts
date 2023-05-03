import React, { useState } from 'react';
import { Link } from 'react-router-dom';


const ShowChefs = ({ chef }) => {

    const { id, chefName, picture, yearsOfExperience, numberOfRecipes, likes } = chef;

    let [loading, setLoading] = useState(true);

    return (
        <div>
            <div className="card w-full bg-lime-200 shadow-xl">
                <figure><img className='h-96' src={picture} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title text-2xl font-bold">{chefName}</h2>
                    <p>Experience: {yearsOfExperience} Years</p>
                    <p>Recipies: {numberOfRecipes} Recipies</p>
                    <div className="card-actions flex justify-between items-center">
                        <p>Social: {likes} Likes</p>
                        <Link to={`/chefs/${id}`}><button onClick={() => setLoading(!loading)} className="btn bg-lime-200 hover:bg-orange-950 text-green-600 border-none">View Recipies</button></Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ShowChefs;