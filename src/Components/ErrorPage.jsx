import React from 'react';
import { Link, useRouteError } from 'react-router-dom';

const ErrorPage = () => {
    const { error, status } = useRouteError()
    return (
        <div>
            <div className='text-center flex justify-center items-center'>
                <div className="card w-9/12 bg-base-100 shadow-xl image-full">
                    <figure><img src="https://media.istockphoto.com/id/1222806141/photo/computer-error.jpg?s=612x612&w=0&k=20&c=QqNEXgbPj31_dIabFdYxu61_H0XJCKc5S_2LO7Z_TeU=" alt="Shoes" /></figure>
                    <div className="card-body">
                        <p className='text-4xl font-bold'>Error {status} <br /> {error.message}</p>
                        <div className="card-actions justify-end">
                        <Link to={'/'} className="btn w-full mt-20 bg-blue-400 text-white border-none hover:bg-blue-900"> Back To Home</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ErrorPage;