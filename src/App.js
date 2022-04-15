import './App.css';
import Title from "./landingpage/Title"
import Skills from "./landingpage/Skills"

import { Nav } from "./landingpage/Nav"
import About from './landingpage/About';
import Footer from './landingpage/Footer';
import Projects from './landingpage/Projects';

import {Menu} from "./components/Menu.js"


function App() {
  return (
    <div>

        <div className="bigdiv">
          <div className="big-container">
            <div className="inner-container">
              <Title/>
              <Skills/>
              <Projects/>
              <About/>
              <Footer/>
            </div>
            
          </div>
          <div className='big-nav-wrapper'>
          <Nav/>
          </div>
          
        </div>
        <Menu/>
       

    </div>
  );
}

export default App;
