import React from 'react';
import classNames from 'classnames';
import "../Button.scss"

function Button({
    children,
    primary,
    secondary,
    success,
    warning,
    danger,
    outline,
    rounded,
    ...rest
}) {
    const buttonClasses = classNames('flex items-center px-3 py-1.5 border', {
        'primary-button': primary,
        'secondary-button': secondary,
        'success-button': success,
        'warning-button': warning,
        'danger-button': danger,
        'rounded-full': rounded,
        'outline-button': outline,
    });

    return (
        <button {...rest} className={buttonClasses}>
            {children}
        </button>
    );
}

Button.propTypes = {
    checkVariationValue: ({ primary, secondary, success, warning, danger }) => {
        const count =
            Number(!!primary) +
            Number(!!secondary) +
            Number(!!success) +
            Number(!!warning) +
            Number(!!danger);

        if (count > 1) {
            return new Error('Only one button type of primary, secondary, success, warning, danger can be true');
        }
    },
};

export default Button;