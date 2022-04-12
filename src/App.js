import './App.css';
import Title from "./landingpage/Title"
import Skills from "./landingpage/Skills"

import Nav from "./landingpage/Nav"


function App() {
  return (
    <div>
        <div className="bigdiv">
          <div className="big-container">
            <div className="inner-container">
              <Title/>

              <Skills/>
            </div>
            
          </div>
          <Nav/>
         
              
          
        </div>

    </div>
  );
}

export default App;
