import React, { useContext } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { AuthContext } from './AuthProvider';

const Header = () => {

    const {user, logOut} = useContext(AuthContext);

    const handleLogOut = () => {
        logOut()
    }

    return (
        <div>
            <div className="navbar bg-lime-200">
                <div className="navbar-start">
                    <p className="font-bold text-3xl">Food-Experts</p>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        <NavLink className='mr-5 hover:bg-orange-950 hover:text-white p-2 rounded-md' to={'/'}>Home</NavLink>
                        <NavLink className=' hover:bg-orange-950 hover:text-white p-2 rounded-md' to={'/blog'}>Blogs</NavLink>
                    </ul>
                </div>
                <div className="navbar-end">
                    { user ? <Link className='mr-2'><button onClick={handleLogOut} className="btn btn-outline hover:bg-orange-950">Logout</button></Link> : <Link className='mr-2' to={'/login'}><button className="btn btn-outline hover:bg-orange-950">Login</button></Link>}
                    <Link to={'/signup'}><button className="btn btn-outline hover:bg-orange-950">Sign Up</button></Link>
                    <img className='h-14 w-14 ml-2 rounded-full' src="https://www.resumeviking.com/wp-content/uploads/2018/10/Front-End-developer-profile-picture.jpg" alt="" />
                </div>
            </div>
        </div>
    );
};

export default Header;