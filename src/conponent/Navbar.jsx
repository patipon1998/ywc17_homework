import React from 'react';
import { map, get } from 'lodash';

import logoPic from '../img/logo_nav.png';

import './Navbar.scss';

const Navbar = props => {
    const handleRenderNavItems = size => {
        return map(props.navbarItems, item => {
            return (
                <li className={size === 'xs' ? 'nav-item' : ''}>
                    <a
                        href={get(item, 'href', '')}
                        target="_blank"
                        className={size === 'xs' ? 'nav-link' : ''}
                    >
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
                    <button
                        className="navbar-toggler first-button collapsed hamburger hamburger--elastic"
                        type="button"
                        data-toggle="collapse"
                        data-target="#navbarSupportedContent20"
                        aria-controls="navbarSupportedContent20"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        {/* <div className="animated-icon1">
                            <span></span>
                            <span></span>
                            <span></span>
                        </div> */}
                        {/* <span className="hamburger-box">
                            <span className="hamburger-inner" />
                        </span> */}
                    </button>
                    <div
                        className="navbar-collapse collapse"
                        id="navbarSupportedContent20"
                    >
                        <ul className="navbar-nav mr-auto">
                            {handleRenderNavItems('xs')}
                        </ul>
                    </div>
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
