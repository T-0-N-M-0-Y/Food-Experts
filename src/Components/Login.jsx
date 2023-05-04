import React, { useContext, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from './AuthProvider';
import { GithubAuthProvider, GoogleAuthProvider } from 'firebase/auth';
import { FaGithub, FaGoogle } from 'react-icons/fa';

const Login = () => {

    const { signIn, googleSignIn, githubSignIn } = useContext(AuthContext);
    const [error, setError] = useState('');

    const navigate = useNavigate();
    const location = useLocation();
    const from = location?.state?.from?.pathname || "/";
    const provider = new GoogleAuthProvider();
    const provider1 = new GithubAuthProvider();

    const handleSignIn = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

        signIn(email, password)
            .then(result => {
                const loggedUser = result.user;
                console.log(loggedUser);
                navigate(from, { replace: true });
                setError('')
            })
            .catch(error => {
                console.log(error.message);
                setError(error.message)
            })
    }


    const handleGoogleSignIn = event => {

        event.preventDefault();

        googleSignIn(provider)
            .then(result => {
                const logUser = result.user;
                console.log(logUser);
                navigate(from, { replace: true });
            })
            .catch(error => {
                console.log(error.message);
            })
    }

    const handleGithubSignIn = event => {

        event.preventDefault();

        githubSignIn(provider1)
            .then(result => {
                const logUser = result.user;
                console.log(logUser);
                navigate(from, { replace: true });
            })
            .catch(error => {
                console.log(error);
            })
    }

    return (
        <div>
            <div className="hero min-h-screen bg-teal-400">
                <div className="card w-full max-w-sm shadow-2xl bg-base-100 my-20">
                    <div className="card-body">
                        <form onSubmit={handleSignIn}>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" name='email' placeholder="email" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" name='password' placeholder="password" className="input input-bordered" required />
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn bg-lime-200 hover:bg-orange-950 text-green-600 border-none">Login</button>
                            </div>
                        </form>
                        <Link to={"/signup"} className="label-text-alt link link-hover">No Account? </Link>
                        <div className='mt-2'>
                            <button className='mr-3' onClick={handleGoogleSignIn}><FaGoogle></FaGoogle></button>
                            <button onClick={handleGithubSignIn}><FaGithub></FaGithub></button>
                        </div>
                        <p className='text-red-600'>{error}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;