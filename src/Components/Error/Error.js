import React from 'react';
import notFound_image from '../../images/notFound_image_thumbnail.png';

const Error = () => {
    return (
        <div className='flex justify-center pt-10'>
            <img  src={notFound_image} alt="" />
        </div>
    );
};

export default Error;