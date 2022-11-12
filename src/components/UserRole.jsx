import React from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types'
import { Button } from '../lib/components/Button';
import { DropDown } from '../lib/components/DropDown';
import {ReactComponent as ArrowDown} from '../assets/svg/arrowDown.svg'
import { Tupple } from '../lib/components/Tupple';


export const UserRole = ({ 
        type, 
        size, 
        className,
        transparent,
        children,
        additionalProps,
        onClick }) => {
    
    const btn = (
        <Tupple
        roundThum={true}
        thumbnail="https://i.pravatar.cc/80?u=ww"
        title="Everyone at Teamout"
        subTitle="2 people"
        actionItem={ <Button 
            className='c-grey-20'
            type="secondary"
        transparent={true}>
        Full access <ArrowDown/>
    </Button>}
      />
   )

    const content = (<div className='br-3 m-1 w-240 r-0'>
                        <Tupple
                        title="Full access"
                        subTitle="Can edit and share with others."
                        />
                        <Tupple
                        title="Can edit"
                        badge="team plan"
                        subTitle="Can edit, but not share with others."
                        />
                        <Tupple
                        title="Can comment"
                        subTitle="Can view and comment, but not edit."
                        />
                        <Tupple
                        title="Can view"
                        subTitle="Cannot edit or share with others."
                        />
                        <Tupple
                        title="No access"
                        danger={true}
                        />
            </div>)


    return (

        <div>
          <DropDown
            dropDownButton ={btn} 
            content= {content}
          />
        </div>
  
    );
  };
  
  UserRole.propTypes = {
    /**
     * Additional classes to be added to the component
     */
    className: PropTypes.string,
   
  };
  
  UserRole.defaultProps = {
    className: '',
    type: 'primary',
    size: 'md',
    transparent: false,
    onClick: () => {}
  };
  