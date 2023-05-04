import React, { useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Rating } from '@smastrom/react-rating'
import '@smastrom/react-rating/style.css'
import LazyLoad from 'react-lazyload';

const ChefDetails = () => {

    const showDetails = useLoaderData();

    const [showButton, setShowButton] = useState(true);
    const [showButton1, setShowButton1] = useState(true);
    const [showButton2, setShowButton2] = useState(true);


    const { chefName, picture, yearsOfExperience, numberOfRecipes, likes, bio, image, image1, image2, name, name1, name2, details, details1, details2, rating, rating1, rating2 } = showDetails;

    const handleAddToFav = () => {
        toast("Added To Favourite");
        setShowButton(false);
    }
    const handleAddToFav1 = () => {
        toast("Added To Favourite");
        setShowButton1(false);
    }
    const handleAddToFav2 = () => {
        toast("Added To Favourite");
        setShowButton2(false);
    }

    return (
        <div>
            <div className="lg:hero min-h-screen bg-teal-400">
                <div className="hero-content flex-col lg:flex-row">
                    <LazyLoad>
                        <img src={picture} className="max-w-lg rounded-lg shadow-2xl" />
                    </LazyLoad>
                    <div>
                        <h1 className="text-5xl font-bold">{chefName}</h1>
                        <p className="py-6">{bio}</p>
                        <p>Experience: {yearsOfExperience} Years</p>
                        <p>Recipies: {numberOfRecipes} Recipies</p>
                        <p>Social: {likes} Likes</p>
                    </div>
                </div>
            </div>

            <h1 className='text-3xl font-bold text-center my-20'>His Signature Recipies</h1>

            <div className='grid lg:grid-cols-3 gap-5'>
                <div className="card w-full h-full bg-teal-400 shadow-xl">
                    <figure><img className='h-96' src={image} alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title text-2xl font-bold">{name}</h2>
                        <p>{details}</p>
                        <div className="flex-grow-1 flex items-center">
                            Ratings: <Rating style={{ maxWidth: 150 }} value={rating} readOnly />
                            <span className='ml-3'>{rating?.number} {rating}</span>
                        </div>
                        <div className="card-actions justify-end">
                            {
                                showButton && (
                                    <button onClick={handleAddToFav} className="btn bg-lime-200 hover:bg-orange-950 text-green-600 border-none">Add To Favourite</button>
                                )
                            }
                            <ToastContainer></ToastContainer>
                        </div>
                    </div>
                </div>
                <div className="card w-full bg-teal-400 shadow-xl">
                    <figure><img className='h-96' src={image1} alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title text-2xl font-bold">{name1}</h2>
                        <p>{details1}</p>
                        <div className="flex-grow-1 flex items-center">
                            Ratings: <Rating style={{ maxWidth: 150 }} value={rating1} readOnly />
                            <span className='ml-3'>{rating1?.number} {rating1}</span>
                        </div>
                        <div className="card-actions justify-end">
                            {
                                showButton1 && (
                                    <button onClick={handleAddToFav1} className="btn bg-lime-200 hover:bg-orange-950 text-green-600 border-none">Add To Favourite</button>
                                )
                            }
                            <ToastContainer></ToastContainer>
                        </div>
                    </div>
                </div>
                <div className="card w-full bg-teal-400 shadow-xl">
                    <figure><img className='h-96' src={image2} alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title text-2xl font-bold">{name2}</h2>
                        <p>{details2}</p>
                        <div className="flex-grow-1 flex items-center">
                            Ratings: <Rating style={{ maxWidth: 150 }} value={rating2} readOnly />
                            <span className='ml-3'>{rating2?.number} {rating2}</span>
                        </div>
                        <div className="card-actions justify-end">
                            {
                                showButton2 && (
                                    <button onClick={handleAddToFav2} className="btn bg-lime-200 hover:bg-orange-950 text-green-600 border-none">Add To Favourite</button>
                                )
                            }
                            <ToastContainer></ToastContainer>
                        </div>
                    </div>
                </div>
            </div>
            <div className='text-center'>
                <Link to={'/'}><button className="btn bg-lime-200 hover:bg-orange-950 text-green-600 border-none my-10">Back To Home</button></Link>
            </div>
        </div>
    );
};

export default ChefDetails;