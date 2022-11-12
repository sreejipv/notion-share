import React, { useEffect, useState } from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types'
import ReactDOM from 'react-dom'


export const Tooltip = ({ 
    copy,
  position, 
  thumbnail,
  className,
  action,
  additionalProps,
  children
}) => {


    const [isOn,setIsOn] = useState(false)

    console.log('setIsOn', isOn)
  const tooltipClass = classnames( 
    // 'd-none',
    'p-relative',
    className
)


    return (
      <div onMouseEnter={()=>setIsOn(true)}
      onClick={()=>setIsOn(false)} 
      onMouseLeave={()=>setIsOn(false)} {...additionalProps}  className={tooltipClass}>
        {isOn &&  <div className='bg-black br-3 c-white fs-2 l--54 t-0 p-1 p-absolute'>
            <div className='w-200'>
                <img className='w-100p' src={thumbnail} />
            </div>
        <div className='w-200'>{copy}</div>
        </div>}
       {children}
      </div>
    );
  };
  
  Tooltip.propTypes = {
    /**
     * Position for the DropDown
     */
     position: PropTypes.string,
    /**
     * Boxshadow for the background
     */
    shadow: PropTypes.bool,
  };
  
  Tooltip.defaultProps = {
    position: 'right',
    shadow: true
  };
  