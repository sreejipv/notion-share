import React from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types'
import ReactDOM from 'react-dom'
import { useRef } from 'react';
import { Modal } from './Modal';


export const ModalWrapper = ({ 
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
    const modalRef = useRef(null)


    return (
      <div className={modalClass} {...additionalProps} ref={modalRef}>
        <Modal element={modalRef}> 123 </Modal>
      </div>
    );
  };
  
  ModalWrapper.propTypes = {
    /**
     * Position for the modal
     */
     position: PropTypes.string,
    /**
     * Boxshadow for the background
     */
    shadow: PropTypes.bool,
  };
  
  ModalWrapper.defaultProps = {
    position: 'right',
    shadow: true
  };
  