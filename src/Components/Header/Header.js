import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../images/quiz-icon.png';
const Header = () => {
    return (
        <div className='bg-[#ccddee]'> 
            <div className="navbar mx-auto container ">
                <div className="navbar-start">
                    <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        <li className='font-semibold'><Link to="/courses">Courses</Link></li>
                        <li className='font-semibold'><Link to="/statistics">Statistics</Link></li>
                        <li className='font-semibold'><Link to="/blog">Blog</Link></li>
                    </ul>
                    </div>
                    <div className='hidden lg:flex'>
                        <img className='lg:h-14' src={logo} alt=".."/>
                        <h2 className='font-semibold pt-[10px] text-2xl'>Quiz Challange</h2>
                    </div>
                </div>
                <div className="navbar-center flex justify-center lg:hidden">
                    <h2 className='font-semibold text-xl'>Quiz Challange</h2>
                    <img className='h-12' src={logo} alt=".."/>
                </div>
                <div className="navbar-end hidden lg:flex">
                <ul className="menu menu-horizontal p-0">
                    <li className='font-semibold'><Link to="/courses">Courses</Link></li>
                    <li className='font-semibold'><Link to="/statistics">Statistics</Link></li>
                    <li className='font-semibold'><Link to="/blog">Blog</Link></li>
                </ul>
                </div>
                </div>
        </div>
    );
};

export default Header; 