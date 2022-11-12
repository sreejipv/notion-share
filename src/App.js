import './App.css';
import "./styles/index.scss";
import "./styles/custom.scss";
import { Button } from './lib/components/Button';
import { DropDown } from './lib/components/DropDown';
import { ShareHeader } from './components/ShareHeader';
import { UserRole } from './components/UserRole';
import { WebShare } from './components/WebShare';

function App() {


 
  return (
    <div className="App">
     <div className="hmn-100 w-100p flex flex-column "> 
       <div className=' m-auto'>
        <DropDown 
            dropDownButton={<Button
            type="secondary"
            transparent={true}
            >
            Share
          </Button>}
          content={
            <div  className="w-400 p-2">
              <ShareHeader/>
              <UserRole title="Everyone at your team" subTitle="3 people"/>
              <UserRole title="John Jacob" subTitle="johnjacob@hotmail.com"/>
              <UserRole title="Calvin klein" subTitle="calvinklein@hotmail.com"/>
              <WebShare title="Share to web" subTitle="anyone with the link can view"/>
            </div>
          }
        />
       </div>
          
     </div>
    </div>
  );
}

export default App;
