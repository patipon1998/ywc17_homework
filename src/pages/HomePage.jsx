import React from 'react';
import { get } from 'lodash';

import Navbar from '../conponent/Navbar';
import useGetContent from '../conponent/useGetContent';

import './HomePage.scss';

const HomePage = () => {
    const content = useGetContent();
    return (
        <>
            <Navbar navbarItems={get(content, 'navbarItems', [])} />
            <h1>{content.duration}</h1>
        </>
    );
};

export default HomePage;
