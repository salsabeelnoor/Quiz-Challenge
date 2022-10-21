import React from 'react';

const Questions = (props) => {
    const {options, question, correctAnswer, id} = props.question;
    return (
        <div className='mx-auto container'>
           <div className="card w-full bg-base-100 shadow-xl">
                <div className="card-body">
                    <h2 className="card-title text-center"><span>Question:</span> {question}</h2>
            
                </div>
            </div>
        </div>
    );
};

export default Questions;