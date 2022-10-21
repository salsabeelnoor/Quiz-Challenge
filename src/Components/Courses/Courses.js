import React from 'react';

const Courses = () => {
    return (
        <div>
            <div className="card w-96 bg-base-100 shadow-xl image-full">
                <figure><img src="https://placeimg.com/400/225/arch" alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">Quiz on React</h2>
                    <p>Total Quiz 11</p>
                    <div className="card-actions justify-end">
                    <button className="btn btn-primary">Take Quiz</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Courses;