import React from 'react';
import {BrowserRouter as Router } from 'react-router-dom'
import RoutePath from './RoutePath';

const Nav = () => {

    return (
        <div>
            <Router>
                <RoutePath />
            </Router>
        </div>
    );
}
 
export default Nav;