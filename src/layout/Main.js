import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../component/Header';

const Main = () => {
    return (
        <div>
            <Header></Header>
            <p className='text-3xl text-lime-500'>P-hero Quiz Test checker</p>
            <Outlet></Outlet>
        </div>
    );
};

export default Main;