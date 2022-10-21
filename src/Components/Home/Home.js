import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Courses from '../Courses/Courses';
import './Home.css';

const Home = () => {
    const courseData = useLoaderData();
    const courses = courseData.data;
    return (
        <div className='bg-gray-100 min-h-[100vh]'>
            <div className='header-container lg:min-h-[700px] min-h-[600px]'>
                <h1 className='text-white text-5xl lg:pt-40 pt-24 font-semibold text-center'>Take a <span className='font-bold text-gray-700'><i>Quiz Challange</i></span> Today!</h1>
                <p className='text-white text-center lg:text-xl text-lg pt-10'>Welcome to the world's largest quiz community. We have one the most effective quiz questions to <br />check your knowledge and skills.It only takes minutes to check your knowledge and know your outcome of efforts. Take a test on <br /> your favourite  coding topic and <span>rock'n'roll</span> .</p>
            </div>
            <div className='pt-20 pb-20'>
                <h1 className='text-4xl font-semibold pb-20'>Our Courses</h1>
                <div className='mx-auto container grid lg:grid-cols-4 gap-4 grid-cols-1'>
                    {
                        courses.map(course => (
                            <Courses
                            key={course.id}
                            course={course}
                            ></Courses>
                        ))
                    }
                </div>
            </div>
        </div>
    );
};

export default Home;