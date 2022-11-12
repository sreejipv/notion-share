import React, { useState } from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types'
import ReactDOM from 'react-dom'

export const Accordion = ({ 
  additionalProps,
  className,
  title,
  content
}) => {
    const [isOpen, setOpen] = useState(false)
    const toggleFn =()=>{
      setOpen(!isOpen)
    }

  const modalClass = classnames({
    'h-0 ': !isOpen,
    'h-40p': isOpen,
    }, 'br-3',
    't-all',
    'o-hidden',
    'w-100p',
    'p-fixed',
    'bg-white',
)
const overlayClass = classnames({
  'p-fixed h-100  w-100p t-0 l- z-10' : isOpen
})

    return (
      <div {...additionalProps} >
        <div onClick={toggleFn}>
          {title}
        </div>
            <div className={modalClass}>
              {content}
            </div>
        </div>
    );
  };
  
  Accordion.propTypes = {
    /**
     * Position for the Collapse
     */
     position: PropTypes.string,
  
  };
  
  Accordion.defaultProps = {
    position: 'right',
  };
  