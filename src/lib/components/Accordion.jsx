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
    'auto': isOpen,
    }, 'br-3',
    't-all',
    'o-hidden',
    'bg-white',
)
const overlayClass = classnames({
  'p-fixed   w-100p t-0 l- z-10' : isOpen
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
  