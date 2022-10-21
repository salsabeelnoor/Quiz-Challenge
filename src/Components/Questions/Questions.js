import React, { useState } from 'react';
import Options from '../Options/Options';
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';


const Questions = (props) => {
    const {options, question, correctAnswer, id} = props.question;
    const [isActive, setActive] = useState(false);
    const [showAns, setShowAns] = useState(false);
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
    return (
        <div className='mx-auto container pt-5'>
           <div className="card w-full bg-base-100 shadow-xl">
                <div className="card-body">
                    <h2 className="card-title text-center"><span>Question:</span> {question}</h2>
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
                    </div>
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