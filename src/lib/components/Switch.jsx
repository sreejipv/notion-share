import React, { useState } from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types'
import ReactDOM from 'react-dom'


export const SwitchToggle = ({ 
  className,
  additionalProps,
  isOn
}) => {

console.log('isOn', isOn)
  const switchClass = classnames( 
    'p-relative',
    'd-inline-block',
    'w-32',
    'h-18',
    'p-fixed',
    'r-0',
    'switch',
    'c-pointer',
    className
)


    return (
      <div {...additionalProps} className="px-3">
       <label className={switchClass}>
        <input className="o-0 w-0 h-0" type="checkbox" checked={isOn}/>
        <span className="br-100 slider p-absolute bg-grey-80 b-0 r-0 l-0 t-0 t-all round"></span>
        </label>
      </div>
    );
  };
  
  SwitchToggle.propTypes = {
    /**
     * Position for the DropDown
     */
     position: PropTypes.string,
    /**
     * Boxshadow for the background
     */
    shadow: PropTypes.bool,
  };
  
  SwitchToggle.defaultProps = {
    position: 'right',
    shadow: true
  };
  