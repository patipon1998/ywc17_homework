import React from 'react';
import { map, get } from 'lodash';

import './Navbar.scss';
import logoPic from '../img/logo_nav.png';

const Navbar = props => {
    const handleRenderNavItems = () => {
        return map(props.navbarItems, item => {
            return (
                <li>
                    <a href={get(item, 'href', '')} target="_blank">
                        {get(item, 'label', '')}
                    </a>
                </li>
            );
        });
    };

    return (
        <header>
            <div className="_mobile-nav header-link-mobile">
                <nav className="navbar navbar-light amber lighten-4">
                    <a className="navbar-brand" href="#">
                        <img src={logoPic} />
                    </a>
                </nav>
            </div>
            <div className="_desktop-nav container-fluid">
                <div className="row">
                    <div className="col-12">
                        <ul className="header-links">
                            {handleRenderNavItems()}
                        </ul>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Navbar;
