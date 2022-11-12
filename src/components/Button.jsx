import React from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types'


export const Button = ({ type, 
        size, 
        className,
        transparent,
        children,
        additionalProps,
        onClick }) => {
    const buttonClass = classnames({
        'bg-blue' : type === 'primary' && !transparent,
        'hover:bg-blue' : type === 'primary' && !transparent,
        'bg-transparent bc-transparent hover:bg-grey-10' : type === 'secondary' && transparent,
        'bg-grey-10 bc-transparent c-grey-80' : type === 'secondary' && !transparent,
    },
    'c-pointer',
    'br-3',
    'fs-3',
    className)

    const handleClick = (event) =>{
        event.preventDefault()
        onClick(event)
    }

    return (
      <button className={buttonClass} 
       onClick={handleClick}
       {...additionalProps}>
           {children}
      </button>
  
    );
  };
  
  Button.propTypes = {
    /**
     * Additional classes to be added to the component
     */
    className: PropTypes.string,
    /**
     * changes the appearence of the button
     */
    type: PropTypes.oneOf(['primary', 'secondary']),
    /**
     * changes the appearence to the backgroundcolor
     */
    transparent: PropTypes.bool,
    /**
     * How large should the button be?
     */
    size: PropTypes.oneOf(['sm', 'md', 'lg']),
    /**
     * Optional click handler
     */
    onClick: PropTypes.func,
  };
  
  Button.defaultProps = {
    className: '',
    type: 'primary',
    size: 'md',
    transparent: false,
    onClick: () => {}
  };
  