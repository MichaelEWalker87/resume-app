import React from 'react';
import Link from '../Link/Link';
import './Footer.scss';
import LinkedIn from '../../assets/Footer/LinkedIn.svg';
import Signature from '../../assets/Footer/Signature.svg';
import CalendlyIconBlueButton from '../../assets/Footer/CalendlyIconBlueButton.svg';
 

function Footer(props) {

    const links = [
        { 
            label: 'LinkedIn Link', 
            path: 'https://www.linkedin.com/in/michael-walker-719471141/', 
            image: LinkedIn 
        },
        { 
            label: 'Calendly Link', 
            path: "https://calendly.com/michael-e-walker-87", 
            image: CalendlyIconBlueButton
        },

    ]

    const renderedLinks = links.map((link) => (
        <Link
            key={link.label}
            to={link.path}
            className="foot-link"
            activeClassName="active-link"
        >
            <img 
                src={link.image} 
                alt={link.label} 
                className="link-image" 
            />
        </Link>
    ));

    return (
        <div className="footer-bar">
            <div className="footer-container">
                <img 
                    src={Signature} 
                    alt={'signature logo'} 
                    className="signature" 
                />
                <nav className="foot-links">
                    {renderedLinks}
                </nav>
                <h4 className="copy-right">
                    © Michael Walker 2023
                </h4>
            </div>
        </div>
    );
}

export default Footer;