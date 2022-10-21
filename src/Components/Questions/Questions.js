import React, { useState } from 'react';
import Options from '../Options/Options';
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye } from '@fortawesome/free-solid-svg-icons'


const Questions = (props) => {
    const {options, question, correctAnswer, id} = props.question;
    const [isActive, setActive] = useState(false);
    let seeCorrectAnswer = false;
    const checkAnswer = (selected) =>{
        if(selected.option === correctAnswer){
            toast.success("Your Answer is Correct");
            setActive(true);
        }
        else{
            toast.error("Wrong Answer");
            setActive(false);
        }
    }
    const rightAnswer = (id) =>{
        seeCorrectAnswer= true;
        toast(`${correctAnswer}`)
    }
    return (
        <div className='mx-auto container pt-5'>
           <div className="card w-full bg-base-100 shadow-xl">
                <div className="card-body">
                    <div className='flex lg:justify-between lg:flex-row flex-col'>
                        <h2 className="card-title text-center"><span>Question:</span> {question}</h2>
                        <div className='p-5 lg:p-0'>
                        <button onClick={() => rightAnswer({id})}><FontAwesomeIcon icon={faEye}></FontAwesomeIcon></button>
                    </div>
                    </div>
                    <div className='grid grid-cols-1 lg:grid-cols-2 gap-5'>
                        {
                            options.map(option => (
                                <Options
                                key={id}
                                option={option}
                                correctAnswer={correctAnswer}
                                isActive={isActive}
                                checkAnswer={checkAnswer}
                                ></Options>
                            ))
                        }
                    </div >
                </div>
            </div>
            <ToastContainer
                position="top-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light"
                />
                {/* Same as */}
            <ToastContainer />
        </div>
    );
};

export default Questions;