import React, { useEffect, useState } from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types'
import { Button } from '../lib/components/Button';
import { DropDown } from '../lib/components/DropDown';
import {ReactComponent as ArrowDown} from '../assets/svg/arrowDown.svg'
import { Tupple } from '../lib/components/Tupple';
import { SwitchToggle } from '../lib/components/Switch';
import { Accordion } from '../lib/components/Accordion';
import { InputButton } from '../lib/components/InputButton';


export const WebShare = ({ 
        type, 
        size, 
        className,
        transparent,
        children,
        additionalProps,
        onClick }) => { 

    const [isOn, setOn] = useState(false)
    const [copied,setCopied] = useState(false)

    useEffect(()=>{
      setTimeout(() => {
        setCopied(false)
      }, 3000);
      console.log('copied', copied)
    }, [copied])

    const btn = (
        <Tupple
        roundThum={true}
        onClick={()=>{setOn(!isOn)}}
        thumbnail="https://i.pravatar.cc/80?u=ww"
        title="Everyone at Teamout"
        subTitle="2 people"
        actionItem={ <SwitchToggle isOn={isOn}/>}
      />
   )

    const content = (<div className='br-3 m-1 w-100p'>
                       <InputButton 
                        onClick={()=>{setCopied(true)}}
                        transparent={true}
                        type="secondary"
                        buttonTitle={ !copied ? 'Copy web link': 'copied'}
                        content="https://deserted-orange-abc.notion.site/Getting-Started-9425f487fef547b5bde455a07a2c3f2c"
                        />
                       
            </div>)


    return (

        <div>
          <Accordion
            title ={btn} 
            content= {content}
          />
        </div>
  
    );
  };
  
  WebShare.propTypes = {
    /**
     * Additional classes to be added to the component
     */
    className: PropTypes.string,
   
  };
  
  WebShare.defaultProps = {
    className: '',
    type: 'primary',
    size: 'md',
    transparent: false,
    onClick: () => {}
  };
  