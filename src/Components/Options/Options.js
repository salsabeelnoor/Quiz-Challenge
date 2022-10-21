import React from 'react';

const Options = ({option,checkAnswer}) => {
    return (
        <div>
            <button onClick={() => checkAnswer({option})} className='btn text-gray-700 border-0 bg-blue-200 w-full hover:text-white'>{option}</button>
        </div>
    );
};

export default Options;