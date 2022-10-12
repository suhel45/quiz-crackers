import React from 'react';
import { Link } from 'react-router-dom';

const Topic = (props) => {
    const {id,name,logo,total} = props.topic;
    return (
        <div >
           <img 
            className='object-cover w-full h-56 md:h-64 xl:h-80'
           src={logo} alt="" />
           <div className='flex'>
             <h1>{name}</h1> 
             <Link to={`../topic/${id}`}>
             <button class="bg-blue-500 hover:bg-blue-700 text-white  py-0 mx-auto px-4 rounded-full">
            start practise
            </button>
             </Link>
           </div>
        </div>
    );
};

export default Topic;