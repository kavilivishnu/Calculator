import React from 'react';
import { NavLink } from 'react-router-dom';

function Nav() {
    return (
        <nav className="navigation">
            <NavLink
                activeClassName="active"
                className="links"
                to="/Logic"
            >
                CALC TYPE-1
            </NavLink>
            <NavLink
                activeClassName="active"
                className="links"
                to="/Trials"
            >
                CALC TYPE-2
            </NavLink>
        </nav>
    )
}

export default Nav;
