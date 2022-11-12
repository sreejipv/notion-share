import React, { useState } from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types'
import ReactDOM from 'react-dom'


export const DropDown = ({ 
    dropDownButton, 
    content,
  className,
  shadow, 
  children,
  additionalProps,

}) => {
    const [showModal, setShowModal] = useState(false)
    const toggleFn =()=>{
      setShowModal(!showModal)
    }

  const modalClass = classnames({
    'elevation-6' : shadow,
    }, 'br-3',
    'hmn-40',
    'wmn-40',
    'p-fixed',
    'z-20',
    'r-0',
    'bg-white',
    className
)
const overlayClass = classnames({
  'p-fixed h-100  w-100p t-0 l- z-10' : showModal
})

    const handleOutsideClick = () => {
      setShowModal(!showModal)

    }

    return (
      <div {...additionalProps} >
        <div onClick={handleOutsideClick} className={overlayClass}></div>
            <div onClick={toggleFn} style={{pointerEvents: showModal &&  'none'}}>{dropDownButton}</div>
            {showModal &&
             <div >
                <div className={modalClass}>
                  {content}
                </div>
             </div>
            }

        {children}
      </div>
    );
  };
  
  DropDown.propTypes = {
    /**
     * Position for the DropDown
     */
     position: PropTypes.string,
    /**
     * Boxshadow for the background
     */
    shadow: PropTypes.bool,
  };
  
  DropDown.defaultProps = {
    position: 'right',
    shadow: true
  };
  