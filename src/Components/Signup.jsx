import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from './AuthProvider';
import { updateProfile } from 'firebase/auth';

const Signup = () => {

    const { createUser } = useContext(AuthContext);
    const [error, setError] = useState('');

    const handleSignUp = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const photo = form.photo.value;
        const password = form.password.value;

        createUser(email, password)
            .then(result => {
                const createdUser = result.user;
                console.log(createdUser);
                setError('');
                event.target.reset();
                updateUserData(result.user, name, photo)
                window.location.reload()
            })
            .catch(error => {
                console.log(error.message);
                setError(error.message)
            })
    }

    const updateUserData = (user, name, photo) => {
        updateProfile(user, {
            displayName: name,
            photoURL: photo
        })
            .then(() => {

            })
            .catch((error => {
                setError(error.message);
            }))
    }

    return (
        <div>
            <div className="hero min-h-screen bg-teal-400 px-5">
                <div className="card w-full max-w-sm shadow-2xl bg-base-100 my-20">
                    <div className="card-body">
                        <form onSubmit={handleSignUp}>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Enter Your Name</span>
                                </label>
                                <input type="text" name='name' placeholder="Name" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" name='email' placeholder="Email" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Photo URL</span>
                                </label>
                                <input type="text" name='photo' placeholder="PhotoURL" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" name='password' placeholder="Password" className="input input-bordered" required />

                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn bg-lime-200 hover:bg-orange-950 text-green-600 border-none">Sign up</button>
                            </div>
                        </form>
                        <Link to={"/login"} className="label-text-alt link link-hover">Already have a Account?</Link>
                        <p className='text-red-600'>{error}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Signup;