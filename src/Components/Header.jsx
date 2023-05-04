import React, { useContext } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { AuthContext } from './AuthProvider';
import './Header.css'

const Header = () => {

    const { user, logOut } = useContext(AuthContext);
    console.log(user);

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
                        <NavLink className={({ isActive }) => isActive ? "active" : "" } to={'/'}><span className='mr-5 text-xl font-semibold'>Home</span></NavLink>

                        <NavLink className={({ isActive }) => isActive ? "active" : "" } to={'/blog'}><span className='mr-5 text-xl font-semibold'>Blogs</span></NavLink>
                    </ul>
                </div>
                <div className="navbar-end">
                    {user ?
                        <Link className='mr-2'><button onClick={handleLogOut} className="btn btn-outline hover:bg-orange-950">Logout</button></Link>
                        :
                        <Link className='mr-2' to={'/login'}><button className="btn btn-outline hover:bg-orange-950">Login</button></Link>
                    }

                    {user ?
                        <div className="tooltip tooltip-bottom" data-tip={user.displayName}>
                            <button><img className='h-10 w-10 ml-2 rounded-full' src={user.photoURL} alt="" /></button>
                        </div>
                        :
                        <Link to={'/signup'}><button className="btn btn-outline hover:bg-orange-950">Sign Up</button></Link>
                    }
                </div>
            </div>
        </div>
    );
};

export default Header;