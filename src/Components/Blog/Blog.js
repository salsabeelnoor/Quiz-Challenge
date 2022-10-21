import React from 'react';

const Blog = () => {
    return (
        <div className='bg-gray-100 min-h-[100vh] pt-20'>
            <div className='mx-auto container bg-white shadow-xl border-0 rounded-lg'>
                <div className='ml-10 p-5'>
                    <h1 className='text-lg font-semibold text-left'><span className='font-bold text-xl text-gray-600'><i>Question: </i></span>What is the purpose of react router ?</h1>
                    <p className='text-left text-base pt-2 pb-5'><span className='font-medium'><i>Answer: </i></span> React Router is a standard library system built on top of the React and used to create routing in the React application using React Router Package. React Router plays an important role to display multiple views in a single page application. Without React Router, it is not possible to display multiple views in React applications. Most of the social media websites like Facebook, Instagram uses React Router for rendering multiple views.</p>

                    <h1 className='text-lg font-semibold text-left'><span className='font-bold text-xl text-gray-600'><i>Question: </i></span>How does context API works?</h1>
                    <p className='text-left text-base pt-2 pb-5'><span className='font-medium'><i>Answer: </i></span>The React Context API is a way for a React app to effectively produce global variables that can be passed around. React.createContext() returns a consumer and a provider. Provider is a component that as it's names suggests provides the state to its children. It will hold the "store" and be the parent of all the components that might need that store. Consumer as it so happens is a component that consumes and uses the state.</p>

                    <h1 className='text-lg font-semibold text-left'><span className='font-bold text-xl text-gray-600'><i>Question: </i></span>What is use ref ?</h1>
                    <p className='text-left text-base pt-2'><span className='font-medium'><i>Answer: </i></span></p>
                    <ul className='text-left text-base list-disc ml-6'>
                        <li>The useRef Hook allows you to persist values between renders.</li>
                        <li>It can be used to store a mutable value that does not cause a re-render when updated.</li>
                        <li>It can be used to access a DOM element directly.</li>
                        <li>If we tried to count how many times our application renders using the useState Hook, we would be caught in an infinite loop since this Hook itself causes a re-render. useRef() only returns one item.</li>
                    </ul>
                </div>
            </div>

        </div>
    );
};

export default Blog;