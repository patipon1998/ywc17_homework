import React, { useState } from 'react';
import { map, get } from 'lodash';

import logoPic from '../img/logo_nav.png';

import './Navbar.scss';

const Navbar = props => {
    const [isOpen, setIsOpen] = useState(0);

    const handleRenderNavItems = size => {
        return map(props.navbarItems, (item, index) => {
            return (
                <li className={size === 'xs' ? 'nav-item' : null} key={index}>
                    <a
                        href={get(item, 'href', '')}
                        target="_blank"
                        className={size === 'xs' ? 'nav-link' : null}
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
                        className="navbar-toggler first-button"
                        type="button"
                        data-toggle="collapse"
                        data-target="#navbarSupportedContent20"
                        aria-controls="navbarSupportedContent20"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                        onClick={() => {
                            setIsOpen(!isOpen);
                        }}
                    >
                        <div
                            className={
                                isOpen
                                    ? 'animated-icon1 open'
                                    : 'animated-icon1'
                            }
                        >
                            <span></span>
                            <span></span>
                            <span></span>
                        </div>
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
