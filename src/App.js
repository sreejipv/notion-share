import logo from './logo.svg';
import './App.css';
import "./styles/index.scss";
import { Button } from './components/Button';
import { useState } from 'react';
import { Modal } from './components/Modal';
import { DropDown } from './components/DropDown';
import { ShareHeader } from './components/ShareHeader';
import { Tupple } from './lib/components/Tupple';


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
        <Tupple
          roundThum={true}
          thumbnail="https://i.pravatar.cc/80"
          title="Everyone at Teamout"
          subTitle="2 people"
          actionItem={
            <Button type="secondary"
            transparent={true}>
              Full access
            </Button>
          }
        />
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
