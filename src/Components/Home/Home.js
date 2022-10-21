import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Courses from '../Courses/Courses';
import './Home.css';

const Home = () => {
    const courseData = useLoaderData();
    const courses = courseData.data; 
    return (
        <div >
            <div className='header-container min-h-[700px]'>
                <h1 className='text-white text-5xl pt-40 font-semibold text-center'>Take a <span className='font-bold text-gray-700'><i>Quiz Challange</i></span> Today!</h1>
                <p className='text-white text-center text-xl pt-10'>Welcome to the world's largest quiz community. We have one the most effective quiz questions to <br />check your knowledge and skills.It only takes minutes to check your knowledge and know your outcome of efforts. Take a test on <br /> your favourite  coding topic and <span>rock'n'roll</span> .</p>
            </div>
            <div className='pt-20'>
                <h1 className='text-4xl font-semibold'>Our Courses</h1>
                <Courses></Courses>
            </div>
        </div>
    );
};

export default Home;