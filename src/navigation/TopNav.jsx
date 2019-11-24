import React from 'react';
import { NavLink } from 'react-router-dom';

import './styles/top-nav.scss'
const TopNav = () => {
    return (
        <div>
            <NavLink to="/courses" activeClassName="top-nav--active">Courses</NavLink>
            <NavLink to="/students" activeClassName="top-nav--active">Students</NavLink>
            <NavLink to="/lecturers" activeClassName="top-nav--active">Lecturers</NavLink>
        </div>
    )
};
export default TopNav;