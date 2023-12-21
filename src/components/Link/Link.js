import React from 'react';
import classNames from 'classnames';
import useNavigation from '../../hooks/use-navigation';
import './Link.scss'; 

function Link({ to, children, className, activeClassName }) {
    const { navigate, currentPath } = useNavigation();

    const linkClasses = classNames('link', {
        [className]: true,
        'active': currentPath === to,
        [activeClassName]: currentPath === to
    });

    const handleClick = (event) => {
        if (event.metaKey || event.ctrlKey) {
            return;
        }

        event.preventDefault();
        
        if (to.startsWith('https://') || to.startsWith('mailto:')) {
            window.open(to, '_blank');
        } else {
            navigate(to);
        }
    };

    return (
        <a className={linkClasses} href={to} onClick={handleClick} rel="noreferrer">
            {children}
        </a>
    );
}

export default Link;