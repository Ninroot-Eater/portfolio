import './App.css';
import Title from "./landingpage/Title"
import Skills from "./landingpage/Skills"

import Nav from "./landingpage/Nav"
import About from './landingpage/About';

import {Helmet} from "react-helmet"

function App() {
  return (
    <div>
      <Helmet>
        <title>Thiha Swan Htet | Home</title>
             
      </Helmet>
        <div className="bigdiv">
          <div className="big-container">
            <div className="inner-container">
              <Title/>
              <About></About>
              <Skills/>
            </div>
            
          </div>
          <Nav/>
         
              
          
        </div>

    </div>
  );
}

export default App;
