import React from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types'


export const InputButton = ({ 
        type, 
        content, 
        buttonTitle,
        actionResult,
        className,
        transparent,
        children,
        additionalProps,
        onClick }) => {
    const buttonClass = classnames({
        'bg-blue c-white  fw-600 bc-grey-30' : type === 'primary' && !transparent,
        'hover:bg-blue' : type === 'primary' && !transparent,
        'bg-transparent bc-grey-30  hover:bg-grey-10' : type === 'secondary' && transparent,
        'bg-grey-10 bc-grey-30  c-grey-80' : type === 'secondary' && !transparent,
    },
    'c-pointer',
    'br-3',
    'fs-3',
    'py-1',
    'px-3',
    className)

    const handleClick = (event) =>{
        event.preventDefault()
        onClick(event)
    }

    return (
      <div className='flex'>
        <input value={content} readonly className='w-100p'/>
        <button className={buttonClass} 
        onClick={handleClick}
       {...additionalProps}>
           <div className='flex flex-middle wmn-120 flex-center'>
            {buttonTitle}
           </div>
      </button>
      </div>
  
    );
  };
  
  InputButton.propTypes = {
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
  
  InputButton.defaultProps = {
    className: '',
    type: 'primary',
    size: 'md',
    transparent: false,
    onClick: () => {}
  };
  