import React from 'react';
import { Link } from 'react-router-dom';

const Courses = (props) => {
    const {id, name, logo, total} = props.course;
    return (
        <div>
            <div className="card w-96 bg-base-100 shadow-xl image-full">
            <figure>
                <img className='bg-blue-200' src={logo} alt="..." />
            </figure>
            <div className="card-body">
                <h2 className="card-title text-white font-bold text-2xl">Take a Quiz on {name}</h2>
                <div className='pt-8'>
                    <p className='text-white font-medium text-l'>Let's take a test and check your knowledge and skill on {name}. All the best</p>
                    <p className='text-white font-base text-l pt-5'>Total Questions: {total}</p>
                </div>
                <div className="card-actions justify-center pt-7">
                    <Link to={`/quiz/${id}`}><button className="btn bg-[#459deb] text-white border-0">Take Quiz</button></Link>
                </div>
            </div>
            </div>
        </div>
    );
};

export default Courses;