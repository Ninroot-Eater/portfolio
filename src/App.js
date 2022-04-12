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
        <meta charSet="utf-8"/>
        <meta name="keywords" content='Thiha, portfolio, Python, Django, backend'/>
        <meta name="description" content='Hi! I am Thiha, and this is my portfolio website.'/>
        <meta name='author' content='Thiha Swan Htet'/>
        <meta name='viewport' content='width=device-width, initial-scale=1.0'/>

        <meta property="og:title" content="Thiha Swan Htet | Portfolio" />
        <meta property="og:url" content="http://www.thiha.net" />
        <meta property="og:image" content="/images/other/face.jpeg" />        
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
