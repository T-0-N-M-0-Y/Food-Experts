import React from 'react';
import { Link, useRouteError } from 'react-router-dom';

const ErrorPage = () => {
    const {error, status}= useRouteError()
    return (
        <div>
            <div className='text-center'>
                <h1 className='font-bold text-5xl pt-64'>Error {status} <br /> {error.message}</h1>
                <Link to={'/'} className="btn w-full mt-20 bg-blue-400 text-white border-none hover:bg-blue-900"> Back To Home</Link>
            </div>
        </div>
    );
};

export default ErrorPage;