import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Questions from '../Questions/Questions';

const Quiz = () => {
    const quizData = useLoaderData();
    const quiz = quizData.data;
    const {name, questions} = quiz;
    return (
        <div className='bg-gray-100'>
            <div className='text-gray-600 lg:text-4xl text-3xl font-bold pt-10'>
                <h1>Welcome to {name} Quiz !!</h1>
            </div>
            <div className='pt-12'>
                {
                    questions.map(question => (
                        <Questions
                            key={question.id}
                            question={question}
                            quiz={quiz}
                        ></Questions>
                    ))
                }
            </div>
        </div>
    );
};

export default Quiz;