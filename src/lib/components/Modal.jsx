import React from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types'
import ReactDOM from 'react-dom'


export const Modal = ({ 
  position, 
  className,
  shadow, 
  children,
  additionalProps,

}) => {
  const modalClass = classnames({
    'elevation-6' : shadow,
    }, 'br-6',
    'hmn-40',
    'wmn-40',
    className
)
    const handleOutsideClick = () => {
      console.log('handleOutsideClick')
    }
    return ReactDOM.createPortal(
      <div className="overlay w-100 h-100" onClick={handleOutsideClick}>
          <div className="modal" onClick={e => e.stopPropagation()}>1233</div>
      </div>
  ,document.body)
    // return (
    //   <div className={modalClass} {...additionalProps}
    //     style={{top: '10px',
    //     position: 'relative'}}>
    //     {children}
    //   </div>
    // );
  };
  
  Modal.propTypes = {
    /**
     * Position for the modal
     */
     position: PropTypes.string,
    /**
     * Boxshadow for the background
     */
    shadow: PropTypes.bool,
  };
  
  Modal.defaultProps = {
    position: 'right',
    shadow: true
  };
  