import React from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types'


export const Tupple = ({ thumbnail, 
    title, 
    subTitle,
    actionItem,
    className,
    roundThum,
    additionalProps,
    }) =>
         {
    const tuppleClass = classnames(
        {},
        'hover:bg-grey-40',
        'flex',
        'flex-between',
        'flex-start',
        'px-3', 
        'py-2' 
    )
    const thumbClass = classnames(
        {'br-100' : roundThum,},
    'br-3',
    'h-32',
    'w-32',
    className)

    return (
     <div className={tuppleClass}>
       <div className="flex flex-start">
            <div className='flex flex-center flex-column mr-2'>
                <img className={thumbClass} src={thumbnail}/>
            </div>
            <div>
                <p className='fs-3 m-0 c-grey-80'>{title}</p>
                <p className='fs-2 m-0 c-grey-20'>{subTitle}</p>
            </div>
        </div>
        <div className='flex flex-column flex-center'>
            {actionItem}
        </div>
     </div>
  
    );
  };
  
  Tupple.propTypes = {
    /**
     * Additional classes to be added to the component
     */
    className: PropTypes.string,

    /**
     * Optional click handler
     */
    onClick: PropTypes.func,
  };
  
  Tupple.defaultProps = {
    className: '',
  };
  