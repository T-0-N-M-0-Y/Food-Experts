import React from 'react';
import { Link } from 'react-router-dom';

const Signup = () => {

    return (
        <div>
            <div className="hero min-h-screen bg-teal-400">
                <div className="card w-full max-w-sm shadow-2xl bg-base-100">
                    <div className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Enter Your Name</span>
                            </label>
                            <input type="Text" placeholder="Name" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" placeholder="email" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" placeholder="password" className="input input-bordered" />
                            <label className="label">
                                <a href="#"  className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn bg-lime-200 hover:bg-orange-950 text-green-600 border-none">Signup</button>
                        </div>
                        <Link to={"/login"}><a href="#" className="label-text-alt link link-hover">Already have a Account?</a></Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Signup;