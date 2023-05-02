import React from 'react';

const Catagory = ({ catagory }) => {
    const { name, image,details } = catagory;
    return (
        <div>
            <div className="card w-full group image-full h-full">
                <figure><img src= {image} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{name}</h2>
                    <p>{details}</p>
                    <div className="card-actions justify-end">
                        <button className="btn bg-lime-200 hover:bg-orange-950 text-green-600 border-none">Buy Now</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Catagory;