import React from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types'
import { Button } from '../lib/components/Button';


export const ShareHeader = ({ 
        type, 
        size, 
        className,
        transparent,
        children,
        additionalProps,
        onClick }) => {
    


    return (

        <div>
            <Button type="secondary" transparent={false}>
                Add emails or people
            </Button>
            <Button type="primary" transparent={false}>
                invite
            </Button>
        </div>
  
    );
  };
  
  Button.propTypes = {
    /**
     * Additional classes to be added to the component
     */
    className: PropTypes.string,
   
  };
  
  ShareHeader.defaultProps = {
    className: '',
    type: 'primary',
    size: 'md',
    transparent: false,
    onClick: () => {}
  };
  