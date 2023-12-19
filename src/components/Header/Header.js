import React from 'react';
import Link from '../Link/Link';
import './Header.scss'; 
import LogoLarge from '../../assets/Logo/LogoLarge.svg'; 

function Header() {
    const links = [
        { label: 'About Me', path: '/' },
        { label: 'Work History', path: '/workhistory' },
        { label: 'Projects', path: '/projects' },
        { label: 'Blog', path: '/blog' },
        { label: 'Contact Me', path: '/contactme' },

    ];

    const renderedLinks = links.map((link) => (
        <Link
            key={link.label}
            to={link.path}
            className="nav-link"
            activeClassName="active-link"
        >
            {link.label}
        </Link>
    ));

    return (
        <div className="header-container">
            <img src={LogoLarge} alt="Logo" className="logo-nav" />
            <nav className="navbar">
                {renderedLinks}
            </nav>
        </div>
    );
}

export default Header;