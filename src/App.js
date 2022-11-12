import logo from './logo.svg';
import './App.css';
import "./styles/index.scss";
import "./styles/custom.scss";
import { Button } from './lib/components/Button';
import { useState } from 'react';
import { Modal } from './lib/components/Modal';
import { DropDown } from './lib/components/DropDown';
import { ShareHeader } from './components/ShareHeader';
import { Tupple } from './lib/components/Tupple';
import {ReactComponent as ArrowDown} from './assets/svg/arrowDown.svg'
import { UserRole } from './components/UserRole';
import { WebShare } from './components/WebShare';

function App() {
  // const button = (<Button 
  //   type="secondary" 
  //   transparent={true}
  //   >
  //    Share
  //  </Button>)


  // const content =( <div>
  //   <Button type="" >
  //     Add emails or people
  //   </Button>
  //   <p>5454545</p>
  //   <p>5454545</p>
  //   <DropDown
  //           dropDownButton ={button} 
  //           content= {<p>testing aaanu</p>}
  //         />
  // </div>)

 
  return (
    <div className="App">
     <div className="hmn-100 w-100p flex flex-column "> 
       <div>
        <ShareHeader/>
        <UserRole/>
        <UserRole/>
        <UserRole/>
        <WebShare/>

        {/* <UserRole/> */}
       
          {/* <DropDown
            dropDownButton ={button} 
            content= {content}
          /> */}
        
       </div>
          
     </div>
    </div>
  );
}

export default App;
